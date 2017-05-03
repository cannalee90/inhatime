import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import UserPasswordFindForm from './user-password-find-form';
import { passwordReset, clearErrors } from './../../actions/session';
import ErrorRender from './../../components/error-render';
import { concatErrors } from './../../utils/helper';


class UserPasswordFind extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  onSubmit(values) {
    this.props.passwordReset(values);
  }

  render() {
    const { session, location } = this.props;
    const errorMessages = concatErrors(session, location.state);
    return (
      <div className='container content'>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4 col-sm-3 col-sm-offset-3'>
            <ErrorRender
              messages={errorMessages}
            />
            <UserPasswordFindForm
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
  return bindActionCreators({ passwordReset, clearErrors }, dispatch);
};

UserPasswordFind.propTypes = {
  userSignin: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(UserPasswordFind);
