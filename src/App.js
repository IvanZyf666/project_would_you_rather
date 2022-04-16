import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import LoginPage from './components/LoginPage';
import PageNotFound from './components/PageNotFound';
import HomePage from './components/HomePage';
import AwardPage from './components/AwardPage';
import QuestionPage from './components/QuestionPage';
import { Routes, Route, Switch } from 'react-router-dom';
import authedUser from './reducers/authedUser';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Fragment>
        {authedUser === null ?
          <LoginPage />
          :
          <div>
            <NavBar />
            <Routes>
              <Route path='/' exact element={<HomePage />} />
              <Route path='/AwardBoard' exact element={<AwardPage />} />
              <Route path='*' element={<PageNotFound />} />
              <Route path="/questions/:id" element={<QuestionPage />} />
            </Routes>
          </div >}
      </Fragment>
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