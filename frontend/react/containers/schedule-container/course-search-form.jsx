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
    this.props.change('type', this.selected);
  }

  onQueryChange(value) {
    this.props.change('type', value);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form className='searchFromContainer' onSubmit={handleSubmit}>
          <CustomSelector
            options={[
              { label: '과목명', value: 'courseName' },
              { label: '전공명', value: 'major' },
              { label: '교수', value: 'instructor' },
            ]}
            selected={this.selected}
            wrapperIdName='search-filter'
            onChange={this.onQueryChange}
          />
          <Field
            name='query'
            className='search-text'
            wrapperClassName='search-text-wrapper'
            component={renderField}
          />
          <Btn
            className='btn btn-middle'
            value='검색'
            type='submit'
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
