import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import UserSignupForm from './user-signup-form';
import { userSignup, clearErrors } from './../../actions/session';
import ErrorRender from './../../components/error-render';

class UserSignin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  onSubmit(values) {
    this.props.userSignup(values);
  }

  render() {
    const { errors } = this.props.session;
    return (
      <div className='container content'>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3'>
            <ErrorRender
              messages={errors}
            />
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

const mapStateToProps = ({ session }) => {
  return {
    session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userSignup, clearErrors }, dispatch);
};

UserSignin.propTypes = {
  userSignup: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(UserSignin);
