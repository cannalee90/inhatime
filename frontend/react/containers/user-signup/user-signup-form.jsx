import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import Btn from './../../common/btn';
import { renderField } from './../../common/field';
import renderSelect from './../../common/react-select';
import validate from './validator';

class UserSigninForm extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { handleSubmit } = this.props;
    const options = [
      { label: '기계공학과', value: '0198005' },
      { label: '항공우주학과', value: '1013446' },
      { label: '컴퓨터공학과', value: '1184217' },
      { label: '철학과', value: '0302072' },
      { label: '정보통신공학과', value: '1185283' },
    ];
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
          <Field
            name='passwordConfirmation'
            type='password'
            className='form-control'
            placeholder='비밀번호 확인'
            component={renderField}
            errorRender={false}
          />
          <Field
            name='department'
            options={options}
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
