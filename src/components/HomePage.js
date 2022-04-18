import { Button, Tab, Tabs } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostBoard from './PostBoard';

class HomePage extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    const style = {
      border: '1px solid green',
      borderRadius: '8px',
			height: '100%',
			minHeight: '100vh',
      margin: '23px',
      width: ' 50%',
		}
    
    return (
      <div className="homepage-tabs m-auto mt-4" style={style}>
        <Tabs
          defaultActiveKey="unanswered"
          transition={false}
          id="noanim-tab-example"
          className="m-4 justify-content-center"
        >
          <Tab eventKey="unanswered" title="Unanswered Questions" >
            <PostBoard questions={unansweredQuestions} isAnswered={false}/>
          </Tab>
          <Tab eventKey="answered" title="Answered Questions">
            <PostBoard questions={answeredQuestions} isAnswered={true}/>
          </Tab>
        </Tabs>


      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {

  const answeredQuestions = Object.keys(questions)
    .filter((id) => users[authedUser].answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    .map((key) => questions[key]);

  const unansweredQuestions = Object.keys(questions)
    .filter((id) => !users[authedUser].answers.hasOwnProperty(id))
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    .map((key) => questions[key]);

  return {
    answeredQuestions,
    unansweredQuestions
  };
}

export default connect(mapStateToProps)(HomePage);