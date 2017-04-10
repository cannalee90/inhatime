import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class CourseSearchForm extends Component {
  constructor(props) {
    super(props);
  }

}

CourseSearchForm = reduxForm({
  form: 'CourseSearchForm',
})(CourseSearchForm);

export default CourseSearchForm;
