'use client'

import { useEffect, useMemo, useRef, useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";
import {useController} from "react-hook-form";
import {InputMaskForAutocomplete} from "@/components/forms/InputMaskForAutocomplete";

export const BaseAutoComplete = ({
		control,
		children,
		className,
		getItems,
		label,
		name,
		placeholder,
		selectedValue,
		errorsVisible = true,
		inputMask = false
	}) => {
	const [autocompleteState, setAutocompleteState] = useState({
		collections: [],
		isOpen: false
	});
	const { field, fieldState } = useController({
		name,
		control
	});

	const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
	const [inputError, setInputError] = useState('');

	const autocomplete = useMemo(() => createAutocomplete({
		placeholder: placeholder ? placeholder : '',
		onStateChange: ({ state }) => {
			setAutocompleteState(state);
		},
		getSources: () => [{
			sourceId: 'carrier-api',
			getItems: async ({ query }) => {
				console.log(query.length)
				if(inputMask && query.length <= 4){
					return await getItems(query);
				}
				if (!!query) {
					return await getItems(query);
				}
			}
		}]
	}), [getItems]);

	const inputRef = useRef(null);
	const panelRef = useRef(null);
	const listRef = useRef(null);

	const inputProps = autocomplete.getInputProps({
		inputElement: inputRef.current,
	});

	const scrollToSelectedItem = (number) => {
		const selectedListItem = listRef.current?.children[selectedItemIndex - number];
		if (selectedListItem) {
			selectedListItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			const selectedItem = autocompleteState.collections[0]?.items[selectedItemIndex];
			if (selectedItem) {
				autocomplete.setQuery(selectedItem.query);
				autocomplete.refresh();
				const selectedValueResult = selectedValue(selectedItem);
				field.onChange(selectedValueResult);
			}
		}
	};

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (autocompleteState.isOpen) {
				switch (event.key) {
					case "ArrowUp":
						event.preventDefault();
						setSelectedItemIndex((prevIndex) =>
							prevIndex > 0 ? prevIndex - 1 : prevIndex
						);
						scrollToSelectedItem(1);
						break;
					case "ArrowDown":
						event.preventDefault();
						setSelectedItemIndex((prevIndex) =>
							prevIndex < autocompleteState.collections[0]?.items.length - 1
								? prevIndex + 1
								: prevIndex
						);
						scrollToSelectedItem(-1);
						break;
					default:
						break;
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [autocompleteState.isOpen, selectedItemIndex]);

	useEffect(() => {
		// Reset selected item index when items change
		setSelectedItemIndex(-1);
	}, [autocompleteState.collections]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (panelRef.current && !panelRef.current.contains(event.target)) {
				// El clic ocurrió fuera del panel, puedes realizar la acción que desees aquí
				setAutocompleteState((prevState) => ({
					...prevState,
					isOpen: false
				}));
			}
		};

		// Agregar event listener al documento
		document.addEventListener("mousedown", handleClickOutside);

		// Limpiar event listener cuando el componente se desmonta
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	useEffect(() => {
		inputRef.current = autocomplete.getInputProps({ inputElement: inputRef.current });
	}, [autocomplete]);

	return (
		<>
			{label ? <label>{label}</label> : null}

			{!inputMask
				? <input
					onChange={(event) => {
						inputProps.onChange(event);
						field.onChange(event);
					}}
					onBlur={(event) => {
						inputProps.onBlur(event);
						field.onBlur(event);
					}}
					onFocus={(event) => {
						inputProps.onFocus(event);
						field.onBlur(event);
					}}
					type="text"
					value={field.value}
					ref={inputRef}
					placeholder={placeholder ? placeholder : ""}
					onKeyDown={handleKeyPress}
					className={`${className} ${fieldState.error ? '!border !border-red-600 animate-shake-horizontal' : ''}`}
				/>
				: <InputMaskForAutocomplete
					control={control}
					field={field}
					mask="{aaaa}-aaaaaaaaaaaaaaa"
					onChange={(event) => {
						inputProps.onChange(event);
						field.onChange(event);
					}}
					onBlur={(event) => {
						inputProps.onBlur(event);
						field.onBlur(event);
					}}
					onFocus={(event) => {
						inputProps.onFocus(event);
						field.onBlur(event);
					}}
					type="text"
					placeholder={placeholder ? placeholder : ""}
					handleKeyPress={handleKeyPress}
					className={`${className} ${fieldState.error ? '!border !border-red-600 animate-shake-horizontal' : ''}`}
				/>
			}

			{autocompleteState.isOpen ? <div ref={panelRef} {...autocomplete.getPanelProps()}>
				{autocompleteState.collections.map((collection, index) => {
					const {items} = collection;

					return (
						<>{children(index, items, listRef, selectedItemIndex, autocomplete, selectedValue, field)}</>
					)
				})}
			</div> : null}

			{fieldState.error && errorsVisible
				? <span className="o-error">{fieldState.error.message}</span>
				: null}
		</>
	)
}
