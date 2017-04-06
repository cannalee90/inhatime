import React, { Component } from 'react';
import CourseSearch from './course-search';
import CourseDetail from './course-detail';

export default class TableInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='col-xs-12 col-md-6 box-padding' id='part-lecture'>
        <CourseSearch />
        <CourseDetail />
      </div>
    );
  }
}
