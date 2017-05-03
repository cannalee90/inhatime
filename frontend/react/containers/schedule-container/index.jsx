import React, { Component } from 'react';
import Timetable from 'Components/timetable';

import CourseSearch from './course-search';

class ScheduleContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className='row' >
        <div className='col-xs-12 col-md-6 box-padding' id='part-lecture'>
          <CourseSearch />
        </div>
        <div className='col-xs-12 col-md-6 box-padding' id='part-timetable'>
          <Timetable />
        </div>
      </div>
    );
  }
}

export default ScheduleContainer;
