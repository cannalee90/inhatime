import React, { Component } from 'react';
import CustomSelector from 'Common/custom-selector';
import AddScheduleModal from 'Components/add-schedule-modal';

class TimetableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addScheduleModal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  termOptions(terms) {
    return terms.map((term) => {
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
      };
    }).toArray();
  }

  toggleModal(key) {
    this.setState({
      [key]: !this.state[key],
    });
  }

  render() {
    const { terms, fetchSchedules, schedules, changeTerm, changeSchedule } = this.props;
    const termOptions = this.termOptions(terms);
    const scheduleOptions = this.scheduleOptions(schedules);
    return (
      <div className='row box timetable-header'>
        <CustomSelector
          options={termOptions}
          wrapperClassName='inline-block btn-large margin-right-5'
          wrapperIdName='choice-semester'
          onChange={(termId) => { changeTerm(termId); }}
        />
        <CustomSelector
          options={scheduleOptions}
          wrapperClassName='inline-block btn-large margin-right-5'
          wrapperIdName='choice-timetable'
          onChange={(value) => { changeSchedule(value); }}
        />
        <div className='inline-block btn-small' onClick={() => { this.toggleModal('addScheduleModal'); }}>
          <span className='glyphicon glyphicon-plus' />
        </div>
        <div className='inline-block btn-middle btn-yellow' style={{ float: 'right' }} data-toggle='modal' data-target='#modal_delete'>
          시간표 삭제
        </div>
        <AddScheduleModal
          showModal={this.state.addScheduleModal}
          toggleModal={() => this.toggleModal('addScheduleModal')}
          onSubmit={() => this.toggleModal('addScheduleModal')}
        />
      </div>
    );
  }
}

export default TimetableHeader;
