import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        this.props.getCurrentUser();
      }
    }

    render() {
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
    return bindActionCreators({ getCurrentUser }, dispatch);
  };

  SetDefaultProps.propTypes = {
    session: PropTypes.object.isRequired,
    getCurrentUser: PropTypes.func.isRequired,
  };

  return connect(mapStateToProps, mapDispatchToProps)(SetDefaultProps);
}
