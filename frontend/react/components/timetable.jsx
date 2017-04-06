import React, { Component } from 'react';
import UserTimetable from './user-timetable';

export default class TimeTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='col-xs-12 col-md-6 box-padding' id='part-timetable'>
        <div className='row box'>
          <div className='inline-block btn-large' id='choice-semester'>
            2017년 1학기
            <span className='glyphicon glyphicon-chevron-down'></span>
            <div id='choice-semester-drop' className='btn-large btn-drop drop-too-long'>
              <a href='#'>2017년 2학기</a><br />
              <a href='#'>2017년 여름학기</a><br />
              <a href='#' className='drop-active'>2017년 1학기</a><br />
              <a href='#'>2016년 겨울학기</a><br />
              <a href='#'>2016년 2학기</a><br />
              <a href='#'>2016년 여름학기</a><br />
              <a href='#'>2016년 1학기</a><br />
              <a href='#'>2015년 겨울학기</a><br />
              <a href='#'>2016년 2학기</a><br />
            </div>
          </div>

          <div className='inline-block btn-large' id='choice-timetable'>
            시간표1
            <span className='glyphicon glyphicon-chevron-down'></span>
            <div id='choice-timetable-drop' className='btn-large btn-drop drop-too-long'>
              <a href='#' className='drop-active'>시간표1</a><br />
              <a href='#'>새 시간표</a><br />
              <a href='#'>이름 길게 지으면 ...</a><br />
            </div>
          </div>

          <div className='inline-block btn-small' data-toggle='modal' data-target='#modal_newtable'>
            <span className='glyphicon glyphicon-plus'></span>
          </div>
          <div className='inline-block btn-middle btn-yellow' style={{ float:'right' }} data-toggle='modal' data-target='#modal_delete'>
            시간표 삭제
          </div>
        </div>
        <UserTimetable />
        <div className='row box box-bottom'>
          <div className='inline-block btn-middle no-btn'>2 / 21학점</div>
          <div className='inline-block btn-middle' style={{float: 'right', marginLeft :'3px'}}>저장</div>
          <div className='inline-block btn-middle btn-yellow' style={{float: 'right'}} data-toggle='modal' data-target='#modal_clear'>클리어</div>
        </div>
      </div>
    );
  }
}