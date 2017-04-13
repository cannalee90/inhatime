import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomSelector from './../common/custom-selector';
import Btn from './../common/btn';
import { renderField } from './../common/field';

class CourseSearchForm extends Component {
  constructor(props) {
    super(props);
    this.onQueryChange = this.onQueryChange.bind(this);
    this.selected = 'major';
  }

  componentDidMount() {
    this.props.change('query', this.selected);
  }

  onQueryChange(value) {
    this.props.change('query', value);
  }

  render() {
    return (
      <div>
        <form className='searchFromContainer'>
          <CustomSelector
            options={[
              { label: '과목명', value: 'course' },
              { label: '전공명', value: 'major' },
              { label: '교수', value: 'instructor' },
            ]}
            selected={this.selected}
            onChange={this.onQueryChange}
          />
          <Field
            name='search'
            className='search-text'
            placeholder='운영체제...'
            component={renderField}
          />
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
