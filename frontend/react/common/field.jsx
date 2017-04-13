import React from 'react';

const renderField = ({ disabled, input, label, type, placeholder, className, meta: { touched, error, warning } }) => {
  return (
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className={className}
      disabled={disabled}
    />
  );
};

export { renderField };
