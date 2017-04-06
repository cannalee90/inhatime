import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Nav from './../components/nav';
import Footer from './../components/footer';
import '../styles/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.children);
    return (
      <div>
        <Nav />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
