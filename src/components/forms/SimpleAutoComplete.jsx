import {BaseAutoComplete} from "@/components/forms/BaseAutoComplete";

/**
 * Autocomplete que muestra información de acuerdo al llamado de un api
 * @param {Function} [children] - elemento que será renderizado
 * @param {String} className - clases adicionales para el input type search
 * @param control
 * @param {boolean} [errorsVisible=true] - determina si se mostrarán o no los errores del input aunque sea requerido
 * @param {Array} [getItems] - regresa el array de los items que coinciden con el valor introducido en el input
 * @param {String} label - label visible, va arriba del input
 * @param {String} [name] - name del input
 * @param {String} placeholder - placeholder del input
 * @param {Function} [selectedValue] - al escoger una opción se determina que value tomará el input
 * */
export const SimpleAutoComplete = ({
		children,
		className,
		control,
		errorsVisible = true,
		getItems,
		label,
		name,
		placeholder,
		selectedValue
	}) => {

	return (
		<BaseAutoComplete
			className={className}
			control={control}
			errorsVisible={errorsVisible}
			getItems={getItems}
			label={label}
			name={name}
			placeholder={placeholder}
			selectedValue={selectedValue}>
			{(index, items, listRef, selectedItemIndex, autocomplete, selectedValue, field) => (
				<div key={`section-${index}`}>
					{items.length > 0
						? <ul
							ref={listRef}
							className="border border-stone-300 absolute top-full left-0 bg-white dark:bg-secondary-700 custom-dark:bg-secondary-700 rounded max-h-[200px] overflow-auto w-full z-10" {...autocomplete.getListProps()}>
							{items.map((item, index) => (
								<li key={index} className={`py-1 px-4 transition-all text-xs ${
									selectedItemIndex === index
										? "bg-primary-500 dark:bg-primary-500 text-white"
										: "hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white"
								}`} onClick={(event) => {
									event.stopPropagation();
									autocomplete.setQuery(item.query)
									autocomplete.refresh();
									const selectedValueResult = selectedValue(item);

									field.onChange(selectedValueResult);
									//setValue(name, selectedValueResult);
								}}>
									{children(item)}
								</li>
							))}
						</ul> : null}
				</div>
			)}
		</BaseAutoComplete>
	)
}
