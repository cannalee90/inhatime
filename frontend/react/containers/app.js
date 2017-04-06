import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Nav from './../components/nav';
import '../styles/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav />
    );
  }
}
