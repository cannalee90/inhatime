import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Btn from './../common/btn';

class CourseSearchForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className='searchFromContainer'>
          <div className='inline-block btn-middle' id='serach-filter'>과목명 <span className='glyphicon glyphicon-chevron-down' />
            <div id='serach-filter-drop' className='btn-middle btn-drop'>
              <a href='#' className='drop-active'>과목명</a><br />
              <a href='#'>전공</a><br />
              <a href='#'>교수</a><br />
              <a href='#'>좋아요</a><br />
              <a href='#'>신청한 강의</a><br />
              <input type='checkbox' name='empty_check' value='empty' /> 빈시간
            </div>
          </div>
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
