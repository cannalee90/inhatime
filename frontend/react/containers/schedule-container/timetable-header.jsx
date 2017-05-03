import React, { Component } from 'react';
import CustomSelector from 'Common/custom-selector';

class TimetableHeader extends Component {
  super(props) {

  }

  render() {
    return (
      <div className='row box timetable-header'>
        <CustomSelector
          options={[
            { label: '2017년 봄학기', value: '1' },
            { label: '2017년 여름학기', value: '2' },
            { label: '2017년 가을학기', value: '3' },
          ]}
          // selected={this.selected}
          wrapperClassName='inline-block btn-large margin-right-5'
          wrapperIdName='choice-semester'
          // onChange={this.onQueryChange}
        />
        <CustomSelector
          options={[
            { label: '시간표 1', value: '1' },
            { label: '시간표 2', value: '2' },
            { label: '시간표 3', value: '3' },
          ]}
          wrapperClassName='inline-block btn-large margin-right-5'
          wrapperIdName='choice-timetable'
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
