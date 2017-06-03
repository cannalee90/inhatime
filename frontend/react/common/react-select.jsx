import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

export default class ReactSelectWrapper extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onChange(val) {
    if (this.props.input.onChange) {
      this.props.input.onChange(val);
    }
  }

  onBlur(e) {
    if (this.props.input.onBlur) {
      this.props.input.onBlur(e);
    }
  }

  onFocus(e) {
    if (this.props.input.onFoucs) {
      this.props.input.onFoucs(e);
    }
  }

  render() {
    const { error, touched, warning, errorRender } = this.props.meta;
    const { options, wrapperClassName, placeholder } = this.props;
    return (
      <div className={`${wrapperClassName} ${(error && touched) ? 'has-error' : null}`}>
        <Select
          name={this.props.input.name}
          options={options}
          value={this.props.input.value}
          onChange={this.onChange}
          onFocus={this.onBlur}
          onBlur={this.onFoucs}
          clearable={this.props.clearable}
          placeholder={placeholder}
        />
        {errorRender && touched && ((error && <span className='error'>{error}</span>) || (warning && <span className='warning'>{warning}</span>)) }
      </div>
    );
  }
}

ReactSelectWrapper.defaultProps = {
  init: {},
  errorRender: false,
  wrapperClassName: 'form-group',
  clearable: false,
};

ReactSelectWrapper.propTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  errorRender: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  clearable: PropTypes.bool,
  placeholder: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
};
