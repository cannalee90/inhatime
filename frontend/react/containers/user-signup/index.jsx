import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import AppAlert from 'Components/app-alert';

import UserSignupForm from './user-signup-form';

class UserSignin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillUnmount() {
  }

  onSubmit(values) {
    const { email, password, department } = values;
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
      <div className='container-fluid user-page-wrapper'>
        <div className='form-wrapper'>
          <h3 className='header'>획원가입</h3>
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
  return bindActionCreators({}, dispatch);
};

UserSignin.propTypes = {
  app: PropTypes.object.isRequired,
  userSignup: PropTypes.func.isRequired,
  // session: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSignin);
