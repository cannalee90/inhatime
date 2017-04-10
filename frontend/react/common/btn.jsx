import React from 'react';

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
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  type: React.PropTypes.string,
  value: React.PropTypes.string,
};

export default Btn;
