import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alert from './../common/alert';

export default class ErrorRender extends Component {
  // constructor(props) {
  //   super(props);
  // }

  translateText() {
    const { messages } = this.props;
    const messageLists = (Array.isArray(messages) ? messages : [messages]);
    return messageLists.map((message) => {
      if (!message) return false;
      if (message.response && message.response.status === 500) {
        return '서버오류';
      }
      return message;
    });
  }

  render() {
    if (!this.props.messages || this.props.messages.length === 0) {
      return null;
    }
    return (
      <Alert
        type={`${this.props.type}`}
        messages={this.translateText(this.props.messages)}
      />
    );
  }
}

ErrorRender.defaultProps = {
  type: 'danger',
}

ErrorRender.propTypes = {
  messages: PropTypes.array.isRequired,
  type: PropTypes.string,
};
