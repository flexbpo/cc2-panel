import PropTypes from "prop-types";

export const Icons = ({name, className, props}) => {
	return (
		<i className={`icon icon-${name} ${className ? className : ''}`} {...props}></i>
	)
}

export const IconPropTypes = Icons.propTypes = {
	/**
	 * Nombre del icono
	 */
	name: PropTypes.oneOf([
		"abi",
		"accept",
		"air",
		"cancel",
		"close",
		"collapse",
		"dark",
		"down",
		"edit",
		"house",
		"light",
		"notification",
		"ocean",
		"organization",
		"reports",
		"search",
		"send",
		"support",
		"truck",
	]),
	/**
	 * Define clases adicionales para el elemento
	 */
	className: PropTypes.string,
};
