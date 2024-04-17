import { useController } from "react-hook-form";

export const Input = ({label, name, type, placeholder, control, className, errorVisible = true, onUpdate, value, onlyNumbers = false}) => {
	const { field, fieldState } = useController({
		name,
		control
	});

	const handleKeyPress = (event) => {
		if (onlyNumbers) {
			const keyPressed = event.key;
			// Permitir solo caracteres numéricos y la tecla de retroceso
			if (!/[0-9]/.test(keyPressed) && keyPressed !== "Backspace") {
				event.preventDefault();
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		//let newValue = value;

		if (onUpdate) onUpdate(name, value);
		field.onChange(event);
		//if(onlyNumbers) newValue = value.replace(/[^0-9]/g, '').replace(/^0+/, '');
		//field.onChange({ target: { name, value: newValue } });
	};

	return (
		<>
			{label ? <label htmlFor={name}>{label}</label> : null}

			<input
				className={`${className ? className : ''} ${fieldState.error ? '!border-red-600 animate-shake-horizontal' : ''}`}
				type={type}
				id={name}
				placeholder={placeholder}
				{...field}
				value={value ? value : field.value}
				onChange={handleChange}
				onKeyDown={handleKeyPress}
			/>

			{fieldState.error && errorVisible
				? <span className="o-error">{fieldState.error.message}</span>
				: null}
		</>
	)
}
