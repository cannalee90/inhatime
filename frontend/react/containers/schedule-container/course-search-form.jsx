import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import CustomSelector from 'Common/custom-selector';
import Btn from 'Common/btn';
import { renderField } from 'Common/field';

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
            wrapperIdName='search-filter'
            onChange={this.onQueryChange}
          />
          <Field
            name='search'
            className='search-text'
            placeholder='운영체제...'
            wrapperClassName='search-text-wrapper'
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
