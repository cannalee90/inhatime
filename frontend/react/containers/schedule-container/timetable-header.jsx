import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import ReactSelect from 'Common/react-select';
import PropTypes from 'prop-types';
import _ from 'lodash';

import AddScheduleModal from 'Components/add-schedule-modal';
import AddScheduleBtn from './add-schedule-btn';

class TimetableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addScheduleModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.addSchedule = this.addSchedule.bind(this);
  }

  addSchedule() {
    this.toggleModal('addScheduleModal');
    this.props.addSchedule();
  }

  toggleModal(key) {
    this.setState({
      [key]: !this.state[key],
    });
  }

  termOptions(terms) {
    return _.map(terms, (term) => {
      return {
        label: `${term.year}/${term.semester}`,
        value: term.id,
      };
    });
  }

  scheduleOptions(schedules) {
    return schedules.map((schedule) => {
      return {
        label: schedule.title,
        value: schedule.id,
        termId: schedule.TermId,
      };
    }).toArray();
  }

  render() {
    const termOptions = this.termOptions(this.props.terms);
    const scheduleOptions = this.scheduleOptions(this.props.schedules);
    return (
      <form onSubmit={this.props.handleSubmit} >
        <div className='row box timetable-header'>
          <Field
            name='termId'
            component={ReactSelect}
            options={termOptions}
            clearable={false}
          />
          <Field
            name='scheduleId'
            component={ReactSelect}
            options={scheduleOptions}
            clearable={false}
          />
          <AddScheduleBtn
            onClick={() => { this.toggleModal('addScheduleModal'); }}
          />
          <div className='inline-block btn-middle btn-yellow' style={{ float: 'right' }} data-toggle='modal' data-target='#modal_delete'>
            시간표 삭제
          </div>
          <AddScheduleModal
            showModal={this.state.addScheduleModal}
            toggleModal={() => this.toggleModal('addScheduleModal')}
            onSubmit={() => this.addSchedule()}
            onFormChange={(field, value) => this.props.onFormChange(field, value)}
          />
        </div>
      </form>
    );
  }
}

TimetableHeader.defaultProps = {
  selectedTerm: null,
};

TimetableHeader.propTypes = {
  addSchedule: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
  terms: PropTypes.array.isRequired,
  schedules: PropTypes.object.isRequired,
  selectedTerm: PropTypes.number,
  selectedSchedule: PropTypes.number,
};

TimetableHeader = reduxForm({
  form: 'TimetableHeader',
  enableReinitialize: true,
})(TimetableHeader);


export default TimetableHeader;
