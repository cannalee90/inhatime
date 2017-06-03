import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import AppAlert from 'Components/app-alert';

import UserSigninForm from './user-signin-form';
import { userSignin, clearErrors } from './../../actions/session';
import LinkTo from './../../common/link-to';

class UserSignin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  onSubmit(values) {
    this.props.userSignin(values);
  }

  render() {
    const { session, location } = this.props;
    return (
      <div className='container-fluid user-signin-wrapper'>
        <div className='form-wrapper'>
          <h3 className='header'>로그인</h3>
          <AppAlert
            state={this.props.app}
          />
          <UserSigninForm
            onSubmit={this.onSubmit}
            errorRender={false}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ session, app }) => {
  return {
    session,
    app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userSignin, clearErrors }, dispatch);
};

UserSignin.propTypes = {
  userSignin: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(UserSignin);
