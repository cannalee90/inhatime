import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchInitialData } from 'Actions/app';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-select/dist/react-select.css';
import 'font-awesome/css/font-awesome.min.css';

import Nav from './../components/nav';
import Footer from './../components/footer';
import './../styles/style.scss';
import './../styles/custom.scss';
// import './../styles/user.scss';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    return (
      <div>
        <Nav
          pathname={this.props.pathname}
        />
        <div className='body-wrapper'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
//
const mapStateToProps = ({ session }, props) => {
  return {
    pathname: props.location.pathname,
    session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchInitialData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
