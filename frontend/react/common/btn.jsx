import React from 'react';
import PropTypes from 'prop-types';

const Btn = (props) => {
  const { className, onClick, type, value } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
      {value}
    </button>
  );
};

Btn.defaultProps = {
  type: 'button',
  value: 'value',
  className: '',
};

Btn.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default Btn;
