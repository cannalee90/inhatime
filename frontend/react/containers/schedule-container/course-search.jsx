import React from 'react';
import RenderTable from 'Components/render-table';

import CourseSearchForm from './course-search-form';

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
