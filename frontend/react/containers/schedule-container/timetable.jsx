import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  clearSchedule,
  removeCourse,
  fetchTerms,
  fetchSchedules,
  changeSchedule,
  saveSchedule,
} from 'Actions/course';

import _ from 'lodash';
import PropTypes from 'prop-types';
import TimeTableHeader from './timetable-header';
import TimeTableBody from './timetable-body';

import TimeTableFooter from './timetable-footer';

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.clearSchedule = this.clearSchedule.bind(this);
    this.saveSchedule = this.saveSchedule.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
    this.fetchSchedules = this.fetchSchedules.bind(this);
    this.changeSchedule = this.changeSchedule.bind(this);
  }

  componentDidMount() {
    this.props.fetchTerms();
  }

  clearSchedule() {
    this.props.clearSchedule();
  }

  fetchSchedules(termId) {
    if (termId) {
      this.props.fetchSchedules(termId);
    }
  }

  saveSchedule() {
    const courseIds = this.props.selectedCourses.entrySeq().map(([courseId, course]) => {
      return courseId;
    }).toArray();

  }

  removeCourse(courseId) {
    this.props.removeCourse(courseId);
  }

  changeSchedule(scheduleId) {
    this.props.changeSchedule(scheduleId);
  }

  calTotalCredit(courses) {
    return courses.entrySeq().map(([courseId, course]) => {
      return course.get('credit');
    }).reduce((credit, acc) => {
      return acc + credit;
    }, 0);
  }

  render() {
    //TODO NOT WORKED BORDER_BOTTOM_WITH property
    const {
      terms,
      termSchedules,
      selectedCourses,
     } = this.props;
    return (
      <div>
        <TimeTableHeader
          terms={terms}
          schedules={termSchedules}
          fetchSchedules={this.fetchSchedules}
          changeSchedule={this.changeSchedule}
        />
        <TimeTableBody
          selectedCourses={selectedCourses}
          removeCourse={this.removeCourse}
        />
        <TimeTableFooter
          clearSchedule={this.clearSchedule}
          saveSchedule={this.saveSchedule}
          totalCredit={this.calTotalCredit(this.props.selectedCourses)}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ course }) => {
  return {
    selectedCourses: course.selectedCourses,
    terms: course.terms,
    termSchedules: course.termSchedules,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeSchedule, clearSchedule, removeCourse, fetchTerms, fetchSchedules }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(TimeTable);
