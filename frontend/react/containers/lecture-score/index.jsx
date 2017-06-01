import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import CourseWrapper from './course-wrapper';
import { fetchRecommendable } from './../../actions/course';


class LectureScore extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchRecommendable();
  }

  render() {
    return (
      <div className='container content'>
        <div className='row'>
          {_.map(this.props.recommendable, (course, idx) => {
            return (
              <CourseWrapper
                name={`course-${idx}`}
                key={course.distinctCode}
                course={course}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

LectureScore.propTypes = {
  fetchRecommendable: PropTypes.func.isRequired,
};

const mapStateToProps = ({ session, course }) => {
  return {
    session,
    recommendable: course.recommendable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchRecommendable }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LectureScore);
