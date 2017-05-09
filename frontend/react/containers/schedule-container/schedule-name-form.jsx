import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from 'Common/field';

class ScheduleAddForm extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.change('type', this.selected);
  // }
  //
  // onQueryChange(value) {
  //   this.props.change('type', value);
  // }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name='title'
          className='search-text'
          component={renderField}
          placeholder='시간표 이름을 입력해주세요.'
        />
      </form>
    );
  }


}

ScheduleAddForm = reduxForm({
  form: 'ScheduleAddForm',
})(ScheduleAddForm);

export default ScheduleAddForm;
