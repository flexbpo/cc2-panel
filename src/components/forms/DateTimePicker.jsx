'use client'

import FocusTrap from "focus-trap-react";
import {DayPicker} from "react-day-picker";
import {useRef, useState} from "react";
import {usePopper} from "react-popper";
import {useController} from "react-hook-form";

export const DateTimePicker = ({label, name, control, className}) => {
	const { field, fieldState } = useController({
		name,
		control
	});
	const popperRef = useRef(null);
	const buttonRef = useRef(null);
	const [popperElement, setPopperElement] = useState(null);
	const [selected, setSelected] = useState();
	const [timeValue, setTimeValue] = useState('00:00');
	const [isPopperOpen, setIsPopperOpen] = useState(false);

	const popper = usePopper(popperRef.current, popperElement, {
		placement: 'bottom-start'
	});

	const closePopper = () => {
		setIsPopperOpen(false);
		buttonRef?.current?.focus();
	};

	const handleInputChange = (event) => {
		setInputValue(event.currentTarget.value);

		const date = parse(event.currentTarget.value, 'y-MM-dd', new Date());

		if (isValid(date)) {
			setSelected(date);
		} else {
			setSelected(undefined);
		}
	};

	const handleButtonClick = () => setIsPopperOpen(true);

	const handleTimeChange = (event) => {
		const time = event.target.value;

		if (!selected) {
			setTimeValue(time);
			return;
		}

		const [hours, minutes] = time.split(':').map((str) => parseInt(str, 10));

		const newSelectedDate = new Date(
			selected.getFullYear(),
			selected.getMonth(),
			selected.getDate(),
			hours,
			minutes
		);

		field.onChange(selected ? selected.toLocaleString() : '')
		setSelected(newSelectedDate);

		setTimeValue(time);
	};

	const handleDaySelect = (date) => {
		if (!timeValue || !date) {
			setSelected(date);
			return;
		}

		const [hours, minutes] = timeValue
			.split(':')
			.map((str) => parseInt(str, 10));

		const newDate = new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			hours,
			minutes
		);

		field.onChange(selected ? selected.toLocaleString() : '');
		setSelected(newDate);
	};

	return (
		<>
			{label ? <label>{label}</label> : null}

			<input
				type="text"
				ref={buttonRef}
				onClick={handleButtonClick}
				onChange={event => {
					handleInputChange()
					field.onChange(event)
				}}
				readOnly
				value={field.value}
				{...field}
				className={`${className} ${fieldState.error ? '!border-red-600 animate-shake-horizontal' : ''}`}
			/>
			{isPopperOpen
				? <FocusTrap
					active
					focusTrapOptions={{
						initialFocus: false,
						allowOutsideClick: true,
						clickOutsideDeactivates: true,
						onActivate: handleButtonClick,
						onDeactivate: closePopper,
						fallbackFocus: buttonRef.current || undefined
					}}
				>
					<div
						tabIndex={-1}
						style={popper.styles.popper}
						className="dialog-sheet"
						{...popper.attributes.popper}
						ref={setPopperElement}
						role="dialog">
						<DayPicker
							className="absolute bg-white dark:bg-secondary-700 custom-dark:bg-secondary-700 rounded top-[60px] left-0 !m-0 shadow text-sm p-2 z-10"
							initialFocus={isPopperOpen}
							mode="single"
							selected={selected}
							onSelect={handleDaySelect}
							footer={
								<div className="flex justify-between items-center">
									<p className="p-4 flex items-center gap-4">
										Time:
										<input
											className="!w-auto"
											type="time"
											value={timeValue}
											onChange={handleTimeChange}
										/>
									</p>
								</div>
							}/>
					</div>
				</FocusTrap>: null}

			{fieldState.error
				? <span className="o-error">{fieldState.error.message}</span>
				: null}
		</>
	)
}
