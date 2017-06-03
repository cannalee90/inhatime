import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { replace } from 'react-router-redux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCurrentUser } from './../actions/session';

export default function (ComposedComponent) {
  class SetDefaultProps extends Component {
    // constructor(props) {
    //   super(props);
    // }

    componentWillMount() {
      const { isAuth } = this.props.session;
      const token = localStorage.getItem('inhatimeAuthToken');
      if (!isAuth && token) {
        this.props.getCurrentUser()
        .then(() => {
          this.props.replace('/schedule');
        });
      }
    }

    render() {
      if (this.props.session.isFetching) {
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

  SetDefaultProps.propTypes = {
    session: PropTypes.object.isRequired,
    getCurrentUser: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(SetDefaultProps);
}
