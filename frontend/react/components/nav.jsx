import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { userSignout } from './../actions/session';
import LinkTo from './../common/link-to';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.navbar = null;
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.pathname !== this.props.pathname && this.collapseIn()) {
      this.navbar.classList.remove('in');
    }
  }

  collapseIn() {
    return this.navbar.classList.toggle('in');
  }


  render() {
    const { currentUser, isAuth } = this.props.session;
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' onClick={() => this.collapseIn()}>
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
          <div ref={(ref) => { this.navbar = ref; }} id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <LinkTo
                  to='/schedule'
                  message={'시간표 '}
                />
              </li>
              <li>
                <LinkTo
                  to='/score'
                  message={'강의평가'}
                />
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
}

const mapStateToProps = ({ session }) => {
  return {
    session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ userSignout }, dispatch);
};

Nav.propTypes = {
  userSignout: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
