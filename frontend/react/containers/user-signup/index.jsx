import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import AppAlert from 'Components/app-alert';

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
    const { email, password, department } = values
    this.props.userSignup({ email, password, MajorId: department.value });
  }

  renderDepartment(departments) {
    return _.map(departments, (department) => {
      const { title, id } = department;
      return {
        label: title,
        value: id,
      };
    });
  }

  render() {
    // const { errors } = this.props.session;
    const { departments } = this.props.app;
    return (
      <div className='container content'>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3'>
            <AppAlert
              state={this.props.app}
            />
            <UserSignupForm
              onSubmit={this.onSubmit}
              errorRender={false}
              departments={this.renderDepartment(departments)}
            />
          </div>
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
  return bindActionCreators({ userSignup, clearErrors }, dispatch);
};

UserSignin.propTypes = {
  userSignup: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(UserSignin);
