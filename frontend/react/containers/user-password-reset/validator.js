export default (values) => {
  const { password, passwordConfirmation } = values;
  const errors = {};
  if (!password) {
    errors.password = '비밀번호를 입력해주세요.';
  }

  if (!passwordConfirmation) {
    errors.passwordConfirmation = '비밀번호를 한번 더 입력해주세요.';
  }

  return errors;
};
