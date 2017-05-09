import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  searchCourses,
  selectCourse,
} from 'Actions/course';
import PropTypes from 'prop-types';


import CourseSearchForm from './course-search-form';
import RenderTable from './render-table';


class CourseSearch extends Component {
  constructor(props) {
    super(props);
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

CourseSearch.propTypes = {
  searchCourses: PropTypes.func.isRequired,
  selectCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};

const mapStateToProps = ({ course }) => {
  return {
    courses: course.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchCourses, selectCourse }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseSearch);
