import React, { Component } from 'react';
import Award from './Award';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';

class AwardPage extends Component {
  render() {
    const style = {
      border: '1px solid green',
      borderRadius: '8px',
      textAlign: 'center',
      width: '46%',
      height: '100%',
      margin: '24px',
    }
    const { sortedUserIDs } = this.props;
    return (
      <div className='d-flex justify-content-center'>
        <div style={style}>
          <Row className='ms-5 me-5 mt-2 mb-3 border-bottom border-success' variant='' style={{ textAlign: 'start' }}>
            <h3 className='m-2'>Leaderboard</h3>
          </Row>
          {sortedUserIDs.map((userID) => <Award key={userID} id={userID} />)}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }) {

  const sortedUserIDs = Object.keys(users).sort((a, b) => {
    const aAnswerNumber = Object.keys(users[a].answers).length;
    const bAnswerNumber = Object.keys(users[b].answers).length;
    return users[b].questions.length + bAnswerNumber - users[a].questions.length - aAnswerNumber;
  });
  return {
    sortedUserIDs: sortedUserIDs
  };
}

export default connect(mapStateToProps)(AwardPage);