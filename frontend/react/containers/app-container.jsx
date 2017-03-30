import React, { Component } from 'react';
import { connect } from 'react-redux';
import Btn from 'Components/btn';
import * as Actions from 'Actions';

class AppContainer extends Component {

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Hello! React</h1>
        <Btn
          value='increment'
          onClick={() => dispatch(Actions.increment())}
        />
        <Btn
          value='decrement'
          onClick={() => dispatch(Actions.decrement())}
          />
        <Btn
          value={`counter ${this.props.counter}`}
          onClick={() => console.log('hello')}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ counter }) => {
  return {
    counter: counter.counter,
  };
};

export default connect(mapStateToProps, null)(AppContainer);
