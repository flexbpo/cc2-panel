export const Input = ({label, name, register, required, errors, ...props}) => {
	return (
		<>
			<label>{label}</label>
			<input {...register(name, { required: required })} {...props}/>
			{errors[name] && <span>This field is required</span>}
		</>
	)
}
