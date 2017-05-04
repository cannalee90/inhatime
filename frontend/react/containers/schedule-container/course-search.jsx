import React, { Component } from 'react';
import RenderTable from 'Components/render-table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchCourses } from 'Actions/course';

import CourseSearchForm from './course-search-form';

class CourseSearch extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.searchCourses({...values, termId: 5});
  }

  render() {
    return (
      <div>
        <div className='row box'>
          <CourseSearchForm
            onSubmit={this.onSubmit}
          />
        </div>
        <div className='row box box-bottom'>
          <RenderTable />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ course }) => {
  return {
    courses: course.courses,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchCourses }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearch);
