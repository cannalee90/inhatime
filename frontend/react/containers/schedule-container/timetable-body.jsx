import React, { Component } from 'react';
import SelectedCourse from './selected-course';
import {
  calOffset,
  timeSplit,
  weekDayInWord,
  setWidths,
  setHeights,
} from './../../utils/helper';

class TimeTableBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widths: [],
      heights: [],
    };
    this.handleWidthAndHeight = this.handleWidthAndHeight.bind(this);
  }

  componentDidMount() {
    this.handleWidthAndHeight();
    window.addEventListener('resize', this.handleWidthAndHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWidthAndHeight);
  }

  handleWidthAndHeight() {
    this.setState({
      widths: setWidths(document.getElementById('tableBody').childNodes[0].childNodes),
      heights: setHeights(document.getElementById('tableBody').childNodes),
    });
  }

  renderSelectedCourses() {
    const { widths, heights } = this.state;
    const leftOffset = calOffset(widths, 0);
    const topOffset = calOffset(heights, 0);
    const { selectedCourses, removeCourse } = this.props;
    return selectedCourses.entrySeq().map(([courseId, course]) => {
      const courseData = timeSplit(course.get('time'));
      return courseData.map((courseDatum) => {
        return (
          <SelectedCourse
            course={course}
            courseTime={courseDatum}
            widths={widths}
            heights={heights}
            leftOffset={leftOffset}
            topOffset={topOffset}
            onClick={removeCourse}
          />
        );
      });
    });
  }

  render() {
    const {
      borderBottomWidth,
      borderRightWidth,
      selectedCourses,
     } = this.props;

    const cellStyle = {
      borderRight: `${borderRightWidth} solid var(--oc-gray-3)`,
      borderBottom: `${borderBottomWidth} solid var(--oc-gray-3)`,
    };

    return (
      <div className='row box'>
        <div className='table-wrap2'>
          <div id='table-pivot'>
            {this.renderSelectedCourses()}
          </div>
          <table className='table-basic'>
            <tbody id='tableBody'>
              <tr>
                {_.times(7, (weekDayIdx) => {
                  return (
                    <td key={weekDayIdx} style={cellStyle}>{weekDayInWord[weekDayIdx]}</td>
                  );
                })
                }
              </tr>
              {_.times(20, (rowIdx) => {
                return (
                  <tr key={rowIdx}>
                    <td style={cellStyle} key={`${rowIdx}-0`}>{rowIdx + 1}</td>
                    {_.times(6, (colIdx) => {
                      return (
                        <td key={`${rowIdx}-${colIdx + 1}`} style={cellStyle} />
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


TimeTableBody.defaultProps = {
  borderRightWidth: '1px',
  borderBottomWidth: '1px',
};


export default TimeTableBody;
