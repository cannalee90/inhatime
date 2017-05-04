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


    const divStyle = {
      position: 'absolute',
      top: '100px',
      left,
      backgroundColor: '#FEE251',
      height: '100px',
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
