import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCeators } from 'redux';
import UserSigninForm from './user-signin-form';

class UserSignin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
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

export default connect()(UserSignin);
