import React, { Component } from 'react';
import CustomSelector from 'Common/custom-selector';

class TimetableHeader extends Component {
  constructor(props) {
    super(props);
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
        label: schedule.get('title'),
        value: schedule.get('id'),
      };
    }).toArray();
  }

  render() {
    const { terms, fetchSchedules, schedules, changeSchedule } = this.props;
    const termOptions = this.termOptions(terms);
    const scheduleOptions = this.scheduleOptions(schedules);
    return (
      <div className='row box timetable-header'>
        <CustomSelector
          options={termOptions}
          wrapperClassName='inline-block btn-large margin-right-5'
          wrapperIdName='choice-semester'
          onChange={(value) => { fetchSchedules(value); }}
        />
        <CustomSelector
          options={scheduleOptions}
          wrapperClassName='inline-block btn-large margin-right-5'
          wrapperIdName='choice-timetable'
          onChange={(value) => { changeSchedule(value); }}
        />
        <div className='inline-block btn-small' data-toggle='modal' data-target='#modal_newtable'>
          <span className='glyphicon glyphicon-plus' />
        </div>
        <div className='inline-block btn-middle btn-yellow' style={{ float: 'right' }} data-toggle='modal' data-target='#modal_delete'>
          시간표 삭제
        </div>
      </div>
    );
  }
}

export default TimetableHeader;
