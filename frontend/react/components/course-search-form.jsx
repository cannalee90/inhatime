import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomSelector from './../common/custom-selector';
import Btn from './../common/btn';

class CourseSearchForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className='searchFromContainer'>
          <CustomSelector
            options={[
              { label: '과목명', val: 'course' },
              { label: '전공명', val: 'major' },
              { label: '교수', val: 'instructor' },
            ]}
            selected='major'
          />
          <input type='text' className='search-text' placeholder='Search...' />
          <Btn
            className='btn btn-middle'
            value='검색'
          />
        </form>
      </div>
    );
  }


}

CourseSearchForm = reduxForm({
  form: 'CourseSearchForm',
})(CourseSearchForm);

export default CourseSearchForm;
