import { useState } from 'react';
import { useIMask } from 'react-imask';
import { useController } from "react-hook-form";

export function InputMaskForAutocomplete ({ control, field, mask, onChange, onBlur, onFocus, type, placeholder, handleKeyPress, className }) {
	const [opts, setOpts] = useState({
		mask: mask
	});

	const { field: { onChange: onFieldChange, value: fieldValue } } = useController({
		name: field.name,
		control: control,
	});

	const {
		ref,
		maskRef,
		setValue,
	} = useIMask(opts, {
		defaultValue: fieldValue,
		onAccept: (value) => {
			onFieldChange(value);
			setValue(value);
		}
	});

	return (
		<input
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
			type={type}
			value={fieldValue}
			ref={ref}
			placeholder={placeholder ? placeholder : ""}
			onKeyDown={handleKeyPress}
			className={className}
		/>
	);
}
