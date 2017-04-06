import React, { Component } from 'react';
import TableInfo from './../components/table-info';

class ScheduleContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='row' style={{ marginTop: '50px' }} >
        <TableInfo />
      </div>
    );
  }
}


export default ScheduleContainer;
