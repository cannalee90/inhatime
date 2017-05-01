import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const LinkTo = (props) => {
  const { to, target, message, className } = props;
  return (
    <Link to={to} target={target} className={className} >{message}</Link>
  );
};

LinkTo.defaultProps = {
  target: '',
  message: 'Btn',
};

LinkTo.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default LinkTo;
