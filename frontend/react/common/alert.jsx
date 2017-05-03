import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BootstrapAlert = (props) => {
  const { type, messages } = props;
  return (
    <Alert bsStyle={type}>
      {messages.map((list, idx) => {
        return (
          <li key={idx}>
            {list}
          </li>
        );
      })}
    </Alert>
  );
};

BootstrapAlert.defaultProps = {
  type: 'danger',
  messages: '',
};

BootstrapAlert.propTypes = {
  type: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
};

export default BootstrapAlert;
