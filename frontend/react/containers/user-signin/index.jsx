import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import UserSigninForm from './user-signin-form';
import { userSignin, clearErrors } from './../../actions/session';
import LinkTo from './../../common/link-to';
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
    this.props.userSignin(values);
  }

  render() {
    const { session } = this.props;
    const { errors } = session;
    return (
      <div className='container content'>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4 col-sm-3 col-sm-offset-3'>
            <ErrorRender
              messages={errors}
            />
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

const mapStateToProps = ({ session }) => {
  return {
    session,
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
