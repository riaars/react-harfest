import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = props => (
  <button
    className={props.className}
    disabled={props.disabled}
    id={props.id}
    onClick={props.onClick}
    type={props.type}>
    {props.icon}
    {props.text}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.object,
  text: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  className: 'btn',
  disabled: false,
  text: '',
  type: 'button'
};

export default Button;
