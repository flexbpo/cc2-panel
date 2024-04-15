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
		'trash',
		'search',
		'plus',
		"quick-entry",
		"truck",
		"house",
		"abi",
		"air",
		"cancelled",
		"card-view",
		"check",
		"close",
		"collapse-left",
		"collapse-right",
		"dark-mode",
		"down",
		"draft",
		"hamburguer",
		"ia",
		"light-mode",
		"notifications",
		"ocean",
		"sent",
		"wizard-view-2",
		"wizard-view",
		"organization",
		"reports",
		"support"]),
	/**
	 * Define clases adicionales para el elemento
	 */
	className: PropTypes.string,
};
