import Select from "react-select";
import {useController} from "react-hook-form";

export const CustomSelect = ({label, name, control, options, defaultValue, errorVisible = true, onUpdate}) => {
	const { field: {value, onChange, ...restField}, fieldState } = useController({
		name,
		control
	});

	return (
		<>
			{label ? <label>{label}</label> : null}

			<Select
				classNamePrefix="custom-select"
				className={`${fieldState.error ? 'custom-select__error' : ''} basic-single`}
				defaultInputValue={defaultValue}
				isSearchable={true}
				name={name}
				options={options}
				value={value ? options.find(value => value.value === value) : value}
				onChange={option => {
					onChange(option ? option.value : option);
					if(onUpdate) onUpdate(name, value)
				}}
				{...restField}
			/>

			{fieldState.error && errorVisible
				? <span className="o-error">{fieldState.error.message}</span>
				: null}
		</>
	)
}
