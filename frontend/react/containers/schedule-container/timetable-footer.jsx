import React from 'react';
import Btn from 'Common/btn';

export default (props) => {
  return (
    <div className='row box box-bottom timetable-footer'>
      <div className='show-credit btn-middle'>{props.totalCredit}학점</div>
      <Btn
        className='inline-block btn btn-middle save-btn'
        onClick={() => props.saveSchedule()}
        value='저장'
        type='button'
      />
      <Btn
        className='inline-block btn btn-middle btn-yellow clear-btn'
        data-toggle='modal'
        data-target='#modal_clear'
        onClick={() => props.clearSchedule()}
        value='클리어'
        type='button'
      />
    </div>
  );
};
