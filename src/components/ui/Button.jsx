import PropTypes from "prop-types";

export const Button = ({label, ...props}) => {
	return (
		<button className="o-button" {...props}>
			<span>
				{label}
			</span>
		</button>
	)
}

export const ButtonPropTypes = Button.propTypes = {
	/**
	 * Label del boton
	 */
	label: PropTypes.string.isRequired,
};
