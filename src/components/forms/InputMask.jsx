import { useState } from 'react';
import { useIMask } from 'react-imask';
import {useController} from "react-hook-form";

export function InputMask ({name, control, mask}) {
	const { field, fieldState } = useController({
		name,
		control
	});

	const [ opts, setOpts ] = useState({
		mask: mask
	});
	const {
		ref,
		maskRef,
		value,
		setValue,
		unmaskedValue,
		setUnmaskedValue,
		typedValue,
		setTypedValue,
	} = useIMask(opts, {
		defaultUnmaskedValue: field.ref, // Usa la referencia del campo controlado
		defaultValue: field.value, // Establece el valor inicial del campo de entrada
		onAccept: (value) => {
			field.onChange(value); // Actualiza el valor del campo controlado cuando se acepta la entrada
		}
	});

	return (
		<input type="text" {...field} ref={ref}/>
	);
}
