import React, { Component } from 'react';
import TimeTableHeader from './timetable-header'
import _ from 'lodash';

class TimeTable extends Component {
  render() {
    return (
      <div>
        <TimeTableHeader />
        <div className='row box'>
          <div className='table-wrap2'>
            <table className='table-basic'>
              <thead>
                <tr>
                  <th></th>
                  <th>월</th>
                  <th>화</th>
                  <th>수</th>
                  <th>목</th>
                  <th>금</th>
                  <th>토</th>
                </tr>
              </thead>
              <tbody>
                {/*
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>8</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>9</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>10</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>11</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>12</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr> */}
                {_.times(20, (rowIdx) => {
                  return (
                    <tr>
                      <td>{rowIdx + 1}</td>
                      {_.times(6, () => {
                        return (
                          <td />
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
          <div className='inline-block btn-middle' style={{float: 'right', marginLeft :'3px'}}>저장</div>
          <div className='inline-block btn-middle btn-yellow' style={{float: 'right'}} data-toggle='modal' data-target='#modal_clear'>클리어</div>
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
