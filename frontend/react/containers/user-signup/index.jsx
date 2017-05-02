import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import UserSignupForm from './user-signup-form';
import { userSignup } from './../../actions/session';

class UserSignin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.userSignup(values);
  }

  render() {
    return (
      <div className='container content'>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4 col-sm-3 col-sm-offset-3'>
            <UserSignupForm
              onSubmit={this.onSubmit}
              errorRender={false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userSignup }, dispatch);
};

UserSignin.propTypes = {
  userSignup: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(UserSignin);
