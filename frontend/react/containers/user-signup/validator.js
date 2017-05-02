import React from 'react';

export default (values) => {
  const { email, password, passwordConfirmation } = values;
  const errors = {};
  if (!email) {
    errors.email = '이메일을 입력해주세요.';
  }
  if (!password) {
    errors.password = '비밀번호를 입력해주세요.';
  }

  if (!passwordConfirmation) {
    errors.passwordConfirmation = '비밀번호를 다시 한번 입력해주세요.';
  }

  if (passwordConfirmation !== password) {
    errors.passwordConfirmation = '비밀번호가 일치하지 않습니다';
  }
  return errors;
};
