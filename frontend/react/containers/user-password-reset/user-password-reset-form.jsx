import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Btn from './../../common/btn';
import { renderField } from './../../common/field';
import validate from './validator';

class UserPasswordFindForm extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form className='redux-form' onSubmit={handleSubmit}>
          <Field
            name='password'
            type='password'
            className='form-control'
            placeholder='비밀번호'
            wrapperClassName='from-group margin-bottom-10'
            component={renderField}
            errorRender={false}
          />
          <Field
            name='passwordConfirmation'
            type='password'
            className='form-control'
            placeholder='비밀번호 확인'
            wrapperClassName='from-group margin-bottom-10'
            component={renderField}
            errorRender={false}
          />
          <Btn
            className='btn btn-primary form-control'
            value='비밀번호 초기화'
            type='submit'
          />
        </form>
      </div>
    );
  }
}

UserPasswordFindForm = reduxForm({
  form: 'UserPasswordFindForm',
  validate,
})(UserPasswordFindForm);

export default UserPasswordFindForm;
