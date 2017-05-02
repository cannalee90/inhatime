import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import UserSigninForm from './user-signin-form';
import { userSignin } from './../../actions/session';
import LinkTo from './../../common/link-to';

class UserSignin extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.userSignin(values);
  }

  render() {
    return (
      <div className='container content'>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4 col-sm-3 col-sm-offset-3'>
            <UserSigninForm
              onSubmit={this.onSubmit}
              errorRender={false}
            />
            <ul className='list-unstyled list-inline text-center'>
              <li>
                <LinkTo
                  message='비밀번호 찾기'
                  to='/user/password'
                />
              </li>
              <li>
                <LinkTo
                  message='회원가입'
                  to='/user/signup'
                />
              </li>
            </ul>
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
  return bindActionCreators({ userSignin }, dispatch);
};

UserSignin.propTypes = {
  userSignin: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(UserSignin);
