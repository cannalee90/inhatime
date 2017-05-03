import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Btn from './../../common/btn';
import { renderField } from './../../common/field';
import validate from './validator';

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
          <Btn
            className='btn btn-primary form-control'
            value='로그인'
            type='submit'
          />
        </form>
      </div>
    );
  }
}

UserSigninForm = reduxForm({
  form: 'UserSigninForm',
  validate,
})(UserSigninForm);

export default UserSigninForm;
