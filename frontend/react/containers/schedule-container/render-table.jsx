import React, { Component } from 'react';
import { timeSplit, codeToKorean } from './../../utils/helper';

class RenderTable extends Component {
  render() {
    const { courses, onSelect } = this.props;
    return (
      <div className='table-wrap'>
        <table className='table-basic'>
          <thead>
            <tr>
              <th>코드</th>
              <th>과목명</th>
              <th>구분</th>
              <th>개설학과</th>
              <th>학년</th>
              <th>학점</th>
              <th>시간</th>
              <th>교수</th>
              <th>기타</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              let courseTime = timeSplit(course.time);
              courseTime = courseTime.map((p) => {
                return codeToKorean(p);
              });
              return (
                <tr key={course.id} className='course-table-row' onClick={() => onSelect(course)}>
                  <td>{course.code}</td>
                  <td>{course.title}</td>
                  <td>{course.classType}</td>
                  <td>{course.majorTitle}</td>
                  <td>{course.grade}</td>
                  <td>{course.credit}</td>
                  <td>{courseTime.join('/')}</td>
                  <td>{course.instructor}</td>
                  <td>{course.etc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RenderTable;
//active className='table-active'
