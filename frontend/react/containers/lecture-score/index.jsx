import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CourseWrapper from './course-wrapper';


class LectureScore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container content'>
        <div className='row'>
          {_.times(6)
            .map((idx) => {
              return (
              <CourseWrapper
                name={`course-${idx}`}
              />);
            })
          }
        </div>
      </div>
    );
  }
}

export default LectureScore;
