import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import PropTypes from 'prop-types';
import {
  clearSchedule,
  removeCourse,
  fetchTerms,
  fetchSchedules,
  changeSchedule,
  saveSchedule,
} from 'Actions/course';

import { formValueSelector } from 'redux-form';
import TimeTableHeader from './timetable-header';
import TimeTableBody from './timetable-body';
import TimeTableFooter from './timetable-footer';
import { calTotalCredit } from './../../utils/helper';

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTerm: null,
      selectedSchedule: {
        id: null,
        title: null,
      },
    };
    this.saveSchedule = this.saveSchedule.bind(this);
    this.removeCourse = this.removeCourse.bind(this);
    this.addSchedule = this.addSchedule.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchTerms();
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.session.isAuth !== this.props.session.isAuth) {
      this.props.fetchTerms();
    }
    if (this.props.termId !== nextProps.termId && nextProps.termId) {
      this.props.fetchSchedules(nextProps.termId.value);
    }
    if (this.props.scheduleId !== nextProps.scheduleId && nextProps.scheduleId) {
      this.props.changeSchedule(nextProps.scheduleId.value);
    }
  }

  onFormChange(field, value) {
    this.setState({
      selectedSchedule: {
        [field]: value,
      },
    });
  }


  addSchedule() {
  }

  saveSchedule() {
  }

  removeCourse(courseId) {
    this.props.removeCourse(courseId);
  }

  initialTermId(terms, val) {
    if (val) {
      return val;
    }
    const init = _.filter(terms, (term) => {
      return term.default;
    })[0];
    return {
      label: `${init.year}/${init.semester}`,
      value: init.id,
    };
  }

  initialScheduleId(schedules, val, termId) {
    if (val) {
      const hasVal = schedules.filter((schedule) => {
        return schedule.id === val.id;
      }).toArray()[0];
      if (hasVal) {
        return val;
      }
    }
    const init = schedules.filter((schedule) => {
      return schedule.default && termId.value === schedule.TermId;
    }).toArray()[0];
    if (init) {
      return {
        label: `${init.title}`,
        value: init.id,
      };
    }
    return null;
  }

  render() {
    // TODO NOT WORKED BORDER_BOTTOM_WITH property
    const {
      terms,
      termSchedules,
      selectedCourses,
      clearSchedule,
      changeSchedule,
     } = this.props;
    if (terms.length === 1) {
      return null;
    }
    return (
      <div>
        <TimeTableHeader
          terms={terms}
          schedules={termSchedules}
          selectedTerm={this.state.selectedTerm}
          onFormChange={this.onFormChange}
          addSchedule={this.addSchedule}
          initialValues={{
            termId: this.initialTermId(terms, this.props.termId),
            scheduleId: this.initialScheduleId(termSchedules, this.props.scheduleId, this.props.termId),
          }}
        />
        <TimeTableBody
          selectedCourses={selectedCourses}
          removeCourse={this.removeCourse}
        />
        <TimeTableFooter
          clearSchedule={() => { clearSchedule(); }}
          saveSchedule={this.saveSchedule}
          totalCredit={calTotalCredit(this.props.selectedCourses)}
        />
      </div>
    );
  }
}

TimeTable.propTypes = {
  selectedCourses: PropTypes.object.isRequired,
  fetchTerms: PropTypes.func.isRequired,
  fetchSchedules: PropTypes.func.isRequired,
  removeCourse: PropTypes.func.isRequired,
  terms: PropTypes.array.isRequired,
  termSchedules: PropTypes.object.isRequired,
  clearSchedule: PropTypes.func.isRequired,
};

const selector = formValueSelector('TimetableHeader');

const mapStateToProps = (state) => {
  return {
    selectedCourses: state.course.selectedCourses,
    terms: state.course.terms,
    termSchedules: state.course.termSchedules,
    termId: selector(state, 'termId'),
    scheduleId: selector(state, 'scheduleId'),
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ changeSchedule, clearSchedule, removeCourse, fetchTerms, fetchSchedules }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(TimeTable);
