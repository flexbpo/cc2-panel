import PropTypes from "prop-types";

export const LinkButton = ({label, href, ...props}) => {
	return (
		<a className="o-button" href={href} {...props}>
			<span>
				{label}
			</span>
		</a>
	)
}

export const LinkButtonPropTypes = LinkButton.propTypes = {
	/**
	 * Label del boton
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Link del enlace
	 */
	href: PropTypes.string.isRequired,
};
