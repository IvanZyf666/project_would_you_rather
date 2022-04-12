import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loadingBar
  };
}

export default connect(mapStateToProps)(App);