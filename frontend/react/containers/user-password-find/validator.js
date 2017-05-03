import React from 'react';

export default (values) => {
  const { email, password } = values;
  const errors = {};
  if (!email) {
    errors.email = '이메일을 입력해주세요.';
  }
  return errors;
};
