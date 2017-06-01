import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';

export default class CourseWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    console.log(nextValue, prevValue, name);
  }

  render() {
    const { rating } = this.state;
    const { name } = this.props;
    return (
      <div className='col-xs-12 col-sm-4 col-md-3 course-outter-wrapper'>
        <div className='box-padding course-wrapper'>
          <div className='course-info-wrapper'>
            <div className='course-name'>
              <h4>오퍼레이팅시스템</h4>
            </div>
            <div className='course-info'>
              <h5>이문규 교수님 / 3학점</h5>

            </div>
          </div>
          <div className='course-stars'>
            <StarRatingComponent
              name={name}
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick}
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
};
