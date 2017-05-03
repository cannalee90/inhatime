import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import UserPasswordResetForm from './user-password-reset-form';
import { passwordConfirm, clearErrors, passwordChange, clearInfos } from './../../actions/session';
import AlertRender from './../../components/error-render';
import { concatErrors } from './../../utils/helper';


class UserPasswordReset extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      isFetching: false,
    }
  }

  componentDidMount() {
    const { hash } = this.props.params;
    this.props.passwordConfirm(hash)
    .then(() => {
      this.setState({
        isFetching: true,
      });
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.props.clearInfos();
  }

  onSubmit(values) {
    this.props.passwordChange(values);
  }


  render() {
    const { session, location } = this.props;
    const { infos } = session;
    const errorMessages = concatErrors(session, location.state);
    return (
      <div className='container content'>
        <div className='row'>
          <div className='col-md-4 col-md-offset-4 col-sm-3 col-sm-offset-3'>
            <AlertRender
              messages={errorMessages}
            />
            <AlertRender
              messages={infos}
              type='success'
            />
            {this.state.isFetching &&
              <UserPasswordResetForm
                onSubmit={this.onSubmit}
                errorRender={false}
              />
            }
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
  return bindActionCreators({ passwordConfirm, clearErrors, clearInfos, passwordChange }, dispatch);
};

UserPasswordReset.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  clearInfos: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  passwordConfirm: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(UserPasswordReset);
