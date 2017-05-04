import React, { Component } from 'react';
import _ from 'lodash';
import TimeTableHeader from './timetable-header'
import SelectedCourse from './selected-course';
import { calOffset, timeSplit } from './../../utils/helper';

const selectedCourses = [
  {
    'id': 2791,
    'grade': '3',
    'credit': 3,
    'classType': '전공선택',
    'time': 'D2T4T5T6:하-001;D4T7T8T9:하-120;',
    'instructor': '송민석',
    'eval': '상대평가',
    'etc': ' ',
    'code': 'CSE3206-001',
    'title': '오퍼레이팅시스템',
    'active': true,
    'url': 'http://sugang.inha.ac.kr/sugang/SU_51001/Lec_Time_Search.aspx',
    'TermId': 5,
    'majorTitle': '컴퓨터공학과 / 컴퓨터공학'
  },
  // {
  //   'id': 2792,
  //   'grade': '3',
  //   'credit': 3,
  //   'classType': '전공선택',
  //   'time': 'D2T13T14T15:하-001;D4T13T14T15:하-120;',
  //   'instructor': '송민석',
  //   'eval': '상대평가',
  //   'etc': ' ',
  //   'code': 'CSE3206-002',
  //   'title': '오퍼레이팅시스템',
  //   'active': true,
  //   'url': 'http://sugang.inha.ac.kr/sugang/SU_51001/Lec_Time_Search.aspx',
  //   'TermId': 5,
  //   'majorTitle': '컴퓨터공학과 / 컴퓨터공학'
  // },
];

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widths: [],
      heights: [],
    };
    this.setWidths = this.setWidths.bind(this);
    this.setHeights = this.setHeights.bind(this);
  }

  componentDidMount() {
    this.setWidths();
    this.setHeights();
  }

  setWidths() {
    const ths = document.getElementById('tableBody').childNodes[0].childNodes;
    const widths = _.chain(ths)
    .map((th) => {
      return th.offsetWidth;
    })
    .value();
    this.setState({
      widths,
    });
  }

  setHeights() {
    const trs = document.getElementById('tableBody').childNodes;
    const heights = _.chain(trs)
    .map((tr) => {
      return tr.offsetHeight;
    })
    .value();
    this.setState({
      heights,
    });
  }

  renderSelectedCourses() {
    const { widths, heights } = this.state;
    const leftOffset = calOffset(widths, 0);
    const topOffset = calOffset(heights, 0);
    return selectedCourses.map((course) => {
      const courseTimes = timeSplit(course.time);
      return courseTimes.map((courseTime) => {
        return (
          <SelectedCourse
            course={course}
            courseTime={courseTime}
            widths={this.state.widths}
            heights={this.state.heights}
            leftOffset={leftOffset}
            topOffset={topOffset}
          />
        );
      });
    });
  }

  render() {
    return (
      <div>
        <TimeTableHeader />
        <div className='row box'>
          <div className='table-wrap2'>
            <div id='table-pivot'>
              {this.renderSelectedCourses()}
            </div>
            <table className='table-basic'>
              <tbody id='tableBody'>
                <tr>
                  <th />
                  <th>월</th>
                  <th>화</th>
                  <th>수</th>
                  <th>목</th>
                  <th>금</th>
                  <th>토</th>
                </tr>
                {_.times(20, (rowIdx) => {
                  return (
                    <tr key={rowIdx}>
                      <td key={`${rowIdx}-0`}>{rowIdx + 1}</td>
                      {_.times(6, (colIdx) => {
                        return (
                          <td key={`${rowIdx}-${colIdx + 1}`} />
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className='row box box-bottom'>
          <div className='inline-block btn-middle no-btn'>2 / 21학점</div>
          <div className='inline-block btn-middle' style={{ float: 'right', marginLeft: '3px' }}>저장</div>
          <div className='inline-block btn-middle btn-yellow' style={{ float: 'right' }} data-toggle='modal' data-target='#modal_clear'>클리어</div>
        </div>
      </div>
    );
  }
}

/* <td className='table-active' id='lecture-minus'>
  <div className='lecture-close-btn' data-toggle='modal' data-target='#modal_minus'>&times;</div>
  <span className='lecture-title-table'>디자인과 생활</span><br/>실기실
</td> */


export default TimeTable;
