import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import UserSigninForm from './user-signin-form';
import { userSignin } from './../../actions/session';

class UserSignin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.userSignin(values);
  }

  render() {
    return (<div className='container'>
      <div className='row'>
        <UserSigninForm
          onSubmit={this.onSubmit}
        />
      </div>
    </div>);
  }
}

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userSignin }, dispatch);
};

UserSignin.propTypes = {
  userSignin: PropTypes.func.isRequired,

}


export default connect(mapStateToProps, mapDispatchToProps)(UserSignin);
