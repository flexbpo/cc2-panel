import {useController} from "react-hook-form";

export const Select = ({name, control, errorVisible = false, label, options, onUpdate}) => {
	const {field: {value, onChange, ...restField}, fieldState} = useController({
		name,
		control
	})
	return (
		<div className="o-select">
			{label ? <label>{label}</label> : null}

			<select
				className={`${fieldState.error ? 'o-select__error' : ''}`}
				value={value ? options.find(value => value.value === value) : value}
				onChange={option => {
					onChange(option.target.value);
					if(onUpdate) onUpdate(name, option.target.value);
				}}
				{...restField}>
				<option value="">Select...</option>
				{options.map((option, index) => (
					<option key={index} value={option.value}>{option.label}</option>
				))}
			</select>

			{fieldState.error && errorVisible
				? <span className="o-error">{fieldState.error.message}</span>
				: null}
		</div>
	)
}
