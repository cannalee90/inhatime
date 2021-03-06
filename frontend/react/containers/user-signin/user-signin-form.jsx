import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import Btn from './../../common/btn';
import { renderField } from './../../common/field';
import validate from './validator';
import LinkTo from './../../common/link-to';

class UserSigninForm extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form className='redux-form' onSubmit={handleSubmit}>
          <Field
            name='email'
            className='form-control'
            placeholder='이메일'
            wrapperClassName='from-group margin-bottom-10'
            component={renderField}
            errorRender={false}
          />
          <Field
            name='password'
            type='password'
            className='form-control'
            wrapperClassName='from-group margin-bottom-10'
            placeholder='비밀번호'
            component={renderField}
            errorRender={false}
          />
          <div className='btn-wrapper'>
            <LinkTo
              className='forget-password'
              message='비밀번호 찾기'
              to='/user/password'
            />
            <LinkTo
              className='btn btn-reverse signin-btn'
              message='회원가입'
              to='/user/signup'
            />
            <Btn
              className='btn btn-inhatime'
              value='로그인'
              type='submit'
            />

          </div>
        </form>
      </div>
    );
  }
}

UserSigninForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

UserSigninForm = reduxForm({
  form: 'UserSigninForm',
  validate,
})(UserSigninForm);

export default UserSigninForm;
