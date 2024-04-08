import {useController} from "react-hook-form";

export const Input = ({label, name, type, placeholder, control, className, errorVisible= true, onUpdate, value}) => {
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
			{label ? <label for={name}>{label}</label> : null}
			<input
				className={`${className ? className : ''} ${fieldState.error ? '!border-red-600 animate-shake-horizontal' : ''}`}
				type={type}
				id={name}
				placeholder={placeholder}
				{...field}
				value={value ? value : field.value}
				onChange={handleChange}/>
			{fieldState.error && errorVisible
				? <span className="o-error">{fieldState.error.message}</span>
				: null}
		</>
	)
}
