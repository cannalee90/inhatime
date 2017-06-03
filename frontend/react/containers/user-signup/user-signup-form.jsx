import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';

import Btn from './../../common/btn';
import { renderField } from './../../common/field';
import renderSelect from './../../common/react-select';
import validate from './validator';

class UserSigninForm extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    const { handleSubmit, departments } = this.props;
    return (
      <div>
        <form className='redux-form' onSubmit={handleSubmit}>
          <Field
            name='email'
            className='form-control'
            wrapperClassName='form-group margin-bottom-10'
            placeholder='이메일'
            component={renderField}
            errorRender={false}
          />
          <Field
            name='password'
            type='password'
            className='form-control'
            wrapperClassName='form-group margin-bottom-10'
            placeholder='비밀번호'
            component={renderField}
            errorRender={false}
          />
          <Field
            name='passwordConfirmation'
            type='password'
            className='form-control'
            wrapperClassName='form-group margin-bottom-10'
            placeholder='비밀번호 확인'
            component={renderField}
            errorRender={false}
          />
          <Field
            name='department'
            wrapperClassName='form-group margin-bottom-10'
            options={departments}
            component={renderSelect}
          />
          <Btn
            className='btn btn-primary form-control'
            value='회원가입'
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
