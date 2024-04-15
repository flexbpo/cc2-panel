'use client'

import {useController} from "react-hook-form";

export const Checkbox = ({label, name, placeholder, className, control, errorVisible= true, onUpdate, value}) => {
	const { field, fieldState } = useController({
		name,
		control
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		if(onUpdate) onUpdate(name, value); // Llamar a la función onUpdate para actualizar el valor en dynamicRows
		field.onChange(event); // Actualizar el valor en el control de formulario
	};

	return (
		<>
			<label className="o-checkbox">
				{label ? <span>{label}</span> : null}
				<input
					className={`${className ? className : ''} ${fieldState.error ? '' : ''}`}
					type="checkbox"
					id={name}
					placeholder={placeholder}
					{...field}
					value={value ? value : field.value}
					onChange={handleChange}/>
				<span></span>
			</label>

			{fieldState.error && errorVisible
				? <span className="o-error">{fieldState.error.message}</span>
				: null}
		</>
	)
}
