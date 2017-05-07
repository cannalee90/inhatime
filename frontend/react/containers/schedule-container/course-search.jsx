import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchCourses, selectCourse } from 'Actions/course';

import CourseSearchForm from './course-search-form';
import RenderTable from './render-table';


class CourseSearch extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.onCourseSelect = this.onCourseSelect.bind(this);
  }

  onSubmit(values) {
    this.props.searchCourses({ ...values, termId: 5 });
  }

  onCourseSelect(course) {
    this.props.selectCourse(course);
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <div className='row box'>
          <CourseSearchForm
            onSubmit={this.onSubmit}
          />
        </div>
        <div className='row box box-bottom'>
          <RenderTable
            courses={courses}
            onSelect={this.onCourseSelect}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ course }) => {
  return {
    courses: course.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchCourses, selectCourse }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearch);
