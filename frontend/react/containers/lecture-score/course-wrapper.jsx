import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

class CourseWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  render() {
    const { rating } = this.state;
    const { name, arrayIdx } = this.props;
    const { title, instructor, credit, id } = this.props.course;
    return (
      <div className='col-xs-12 col-sm-4 col-md-3 course-outter-wrapper'>
        <div className='box-padding course-wrapper'>
          <div className='course-info-wrapper'>
            <div className='course-name'>
              <h4>{title}</h4>
            </div>
            <div className='course-info'>
              <h5>{instructor} 교수님 / {credit}학점</h5>
            </div>
          </div>
          <div className='course-stars'>
            <StarRatingComponent
              name={name}
              starCount={5}
              value={rating}
              onStarClick={(nextValue, prevValue, componentName) => this.props.onSubmit(nextValue, id)}
              renderStarIcon={(index, value) => {
                return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

CourseWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CourseWrapper;
