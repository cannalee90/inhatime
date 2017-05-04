import React from 'react';

export default (props) => {
  const { courses } = props;
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
            return (
              <tr key={course.id} className='course-table-row'>
                <td>{course.code}</td>
                <td>{course.title}</td>
                <td>{course.classType}</td>
                <td>{'컴공'}</td>
                <td>{course.grade}</td>
                <td>{course.credit}</td>
                <td>{course.time}</td>
                <td>{course.instructor}</td>
                <td>{course.etc}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

//active className='table-active'
