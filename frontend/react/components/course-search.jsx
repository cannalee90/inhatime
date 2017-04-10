import React from 'react';
import CourseSearchForm from './course-search-form';
import RenderTable from './render-table';

export default (props) => {
  return (
    <div>
      <div className='row box'>
        <CourseSearchForm />
      </div>
      <div className='row box box-bottom'>
        <RenderTable />
      </div>
    </div>
  );
};
