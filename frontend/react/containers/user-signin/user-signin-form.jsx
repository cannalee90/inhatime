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
        <form className='' onSubmit={handleSubmit}>
          <Field
            name='email'
            className='form-control'
            placeholder='이메일'
            component={renderField}
            errorRender={false}
          />
          <Field
            name='password'
            type='password'
            className='form-control'
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
