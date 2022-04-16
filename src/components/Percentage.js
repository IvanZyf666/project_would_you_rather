import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

class Percentage extends Component {
  render() {
    const { option, totalVotes, user } = this.props;
    const isVote = option.votes.includes(user);
    const optionVotes = option.votes.length;
    const optionPercent = Math.round((optionVotes / totalVotes) * 100);

    const progressBarStyle = {
      // borderRadius: '10px',
      backgroundColor: '#f5f5f5',
      width: '80%',
      margin: 'auto',
      height: '22px',
      borderRadius: '10px',
    }

    const cardStyle = {
      borderRadius: '8px',
      backgroundColor: isVote ? '#ecffd9' : '',
    }

    return (
      <Container>
        <Row className='border border-success m-2' style={cardStyle}>
          <Row className='justify-content-center mt-2'>
            {option.text}
          </Row>
          <div className='justify-content-center'>
            <ProgressBar now={optionPercent} variant='success' animated className='border' style={progressBarStyle} />
          </div>


          <Row className='justify-content-center'>
            {optionVotes}/{totalVotes}
          </Row>
          <Row className='justify-content-end mb-3' style={{ fontWeight: 'bold' }}>
            {isVote ? '✓ Your vote' : null}
          </Row>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    user: authedUser,
  };
}

export default connect(mapStateToProps)(Percentage);