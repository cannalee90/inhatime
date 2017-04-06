import React, { Component } from 'react';
import TableInfo from '../components/table-info';
import Timetable from './../components/timetable';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row' style={{ marginTop: '50px' }} >
        <TableInfo />
        <Timetable />
      </div>
    );
  }
}


export default ScheduleContainer;
