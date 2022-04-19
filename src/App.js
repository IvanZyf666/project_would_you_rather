import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import LoginPage from './components/LoginPage';
import PageNotFound from './components/PageNotFound';
import HomePage from './components/HomePage';
import AwardPage from './components/AwardPage';
import QuestionPage from './components/QuestionPage';
import NewQuestion from './components/NewQuestion';
import { Routes, Route, Switch } from 'react-router-dom';
import authedUser from './reducers/authedUser';
import NavBar from './components/NavBar';
import { Spinner } from 'react-bootstrap';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser, loadingBar } = this.props;

    if (loadingBar.default === undefined || loadingBar.default === 1) {
      //loading
      return (
        <div className="loadingPage">
          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      );
    } else {
      return (
        <Fragment>
          {authedUser === null ?
            <LoginPage />
            :
            <div>
              <NavBar />
              <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/leaderboard' exact element={<AwardPage />} />
                <Route path='/add' exact element={<NewQuestion />} />
                <Route path="/questions/:id" element={<QuestionPage />} />
                <Route path='*' element={<PageNotFound />} />
              </Routes>
            </div >}
        </Fragment>
      );
    }
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loadingBar
  };
}

export default connect(mapStateToProps)(App);