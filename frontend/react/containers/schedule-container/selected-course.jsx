import React, { Component } from 'react';

class SelectedCourse extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props.course;
    const { courseTime, widths, heights, leftOffset, topOffset } = this.props;
    const width = widths[courseTime.classDayIdx] + 1;
    const left = leftOffset[courseTime.classDayIdx];
    const top = topOffset[courseTime.classTimeBegin];
    const height = topOffset[courseTime.classTimeLast + 1] - topOffset[courseTime.classTimeBegin] + 1
    const divStyle = {
      position: 'absolute',
      top,
      left,
      backgroundColor: '#FEE251',
      height,
      width,
    };

    return (
      <div style={divStyle} >
        {title}
      </div>
    );
  }
}

export default SelectedCourse;
