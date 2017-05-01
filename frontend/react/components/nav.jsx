import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userSignout } from './../actions/session';
import LinkTo from './../common/link-to';


class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, isAuth } = this.props.session;
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <LinkTo
              className='navbar-brand'
              to='/'
              message='time table'
            />
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#' className='activated'>시간표짜기</a>
              </li>
              <li>
                <a href='#'>강의평가하기</a>
              </li>
              {isAuth &&
                <li>
                  <a href='#'>{currentUser.email}</a>
                </li>
              }
              {isAuth &&
                <li>
                  <a href='#' onClick={() => this.props.userSignout()}>로그아웃</a>
                </li>
              }
              {!isAuth &&
                <li>
                  <LinkTo
                    to='/user/signin'
                    message='로그인'
                  />
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

const mapStateToProps = ({ session }) => {
  return {
    session,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userSignout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
