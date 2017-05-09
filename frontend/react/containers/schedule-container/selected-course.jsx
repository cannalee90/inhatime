import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

class SelectedCourse extends Component {
  constructor(props) {
    super(props);
    this.getDivStyle = this.getDivStyle.bind(this);
  }

  getDivStyle() {
    const {
      courseTime,
      widths,
      leftOffset,
      topOffset,
    } = this.props;
    const width = widths[courseTime.classDayIdx] + 1;
    const left = leftOffset[courseTime.classDayIdx];
    const top = topOffset[courseTime.classTimeBegin];
    const height = topOffset[courseTime.classTimeLast + 1] - (topOffset[courseTime.classTimeBegin] + 1);
    if (_.isNumber(width) && _.isNumber(left) && _.isNumber(top) && _.isNumber(height)) {
      return {
        position: 'absolute',
        top,
        left,
        backgroundColor: '#FEE251',
        height,
        width,
      };
    }
    return {
      display: 'none',
    };
  }

  render() {
    const { courseTime, onClick } = this.props;
    const { id, title, instructor } = this.props.course;
    const divStyle = this.getDivStyle();
    return (
      <div
        style={divStyle}
        className='selectedCourse'
        onClick={() => { onClick(id); }}
      >
        {title}
        <br />
        {instructor}
        <br />
        {courseTime.classRoom}
      </div>
    );
  }
}

SelectedCourse.propTypes = {
  course: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  courseTime: PropTypes.object.isRequired,
  widths: PropTypes.array.isRequired,
  leftOffset: PropTypes.array.isRequired,
  topOffset: PropTypes.array.isRequired,
};

export default SelectedCourse;
