import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { replace } from 'react-router-redux';
import urlencode from 'urlencode';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCurrentUser } from './../actions/session';

export default function (ComposedComponent) {
  class RequireUser extends Component {
    // constructor(props) {
    //   super(props);
    // }

    componentWillMount() {
      const { isAuth } = this.props.session;
      const { pathname } = this.props.location;
      const next = urlencode(pathname);
      if (!isAuth && !localStorage.getItem('inhatimeAuthToken')) {
        this.props.replace(`/?next=${next}`);
      }
    }

    render() {
      if (!this.props.session.isAuth) {
        return null;
      }

      return (<ComposedComponent
        {...this.props}
      />);
    }
  }

  const mapStateToProps = ({ intl, session }) => {
    return {
      intl,
      session,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCurrentUser, replace }, dispatch);
  };

  RequireUser.propTypes = {
    session: PropTypes.object.isRequired,
    replace: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(RequireUser);
}
