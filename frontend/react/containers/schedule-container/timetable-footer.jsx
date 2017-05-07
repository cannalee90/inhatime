import React from 'react';

export default (props) => {
  return (
    <div className='row box box-bottom'>
      <div className='inline-block btn-middle no-btn'>2 / 21학점</div>
      <div className='inline-block btn-middle'
        style={{ float: 'right', marginLeft: '3px' }}
        onClick={() => props.saveSchedule()}
      >
        저장
      </div>
      <div
        className='inline-block btn-middle btn-yellow'
        style={{ float: 'right' }}
        data-toggle='modal'
        data-target='#modal_clear'
        onClick={() => props.clearSchedule()}
      >
        클리어
      </div>
    </div>
  );
};
