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
      { value: 'C++11', label: 'C++11', ext: 'c++' },
      { value: 'C++', label: 'C++', ext: 'cpp' },
      { value: 'java', label: 'Java', ext: 'java' },
      { value: 'python', label: 'Python', ext: 'py' },
      { value: 'ruby', label: 'Ruby 1.8', ext: 'rb' },
      { value: 'javascript', label: 'Javascript', ext: 'js' },
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
            name='language'
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
