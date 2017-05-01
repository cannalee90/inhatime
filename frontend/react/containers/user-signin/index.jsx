import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCeators } from 'redux';

class UserSignin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className='container'>
      <div className='row'>
        <h1>UserSignin</h1>
      </div>
    </div>);
  }
}

export default connect()(UserSignin);
