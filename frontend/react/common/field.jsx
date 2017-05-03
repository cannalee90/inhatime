import React from 'react';
import PropTypes from 'prop-types';

const renderField = ({ wrapperClassName, className, errorRender, disabled, input, label, type, placeholder, meta: { touched, error, warning } }) => {
  if (label || label.length === 0) {
    <div className={`${wrapperClassName} ${(error && touched) ? 'has-error' : null}`}>
      <label className='col-sm-2 control-label' htmlFor={input.name}>{label}</label>
      <div className='col-sm-10'>
        <input
          {...input}
          placeholder={placeholder}
          type={type}
          className={className}
          disabled={disabled}
        />
        {errorRender && (touched && ((error && <strong className='error'><span>{error}</span></strong>) || (warning && <span className='warning'>{warning}</span>))) }
      </div>
    </div>;
  }
  return (
    <div className={`${wrapperClassName} ${(error && touched) ? 'has-error' : null}`}>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={className}
        disabled={disabled}
      />
      {errorRender && (touched && ((error && <strong className='error'><span>{error}</span></strong>) || (warning && <span className='warning'>{warning}</span>)))}
    </div>
  );
};

renderField.defaultProps = {
  errorRender: true,
  disabled: false,
  type: 'text',
  label: '',
  className: 'form-control',
  wrapperClassName: 'from-group',
};

renderField.propTypes = {
  errorRender: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export { renderField };
