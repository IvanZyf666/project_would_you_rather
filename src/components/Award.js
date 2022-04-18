import react, { Component } from 'react';
import Avatar from './Avatar';
import { connect } from 'react-redux';
import { Card, Row, Col, Button } from 'react-bootstrap';

class Award extends Component {
  render() {
    const { name, avatarURL, questions, answers } = this.props.user;
    const questionNumber = questions ? questions.length : 0;
    const answerNumber = answers ? Object.keys(answers).length : 0;
    const totalNumber = questionNumber + answerNumber;
    const scoreStyle = {
      // border: '1px solid green
    }
    return (
      <div className='d-flex justify-content-center'>
        <Card bg='light' className='m-3 mt-0 mb-4 border border-success' style={{ borderRadius: '8px', width: '80%' }}>
          <Card.Header style={{ fontSize: '17px', borderBlockColor: 'green' }}>{name}</Card.Header>
          <Card.Body>
            <Row>
              <Col xs={3}>
                <Avatar avatarURL={avatarURL} size="140" />
              </Col>
              <Col xs={1} className='divider'></Col>
              <Col xs={6} style={{ marginLeft: '-8%' }}>
                {/* <Row><h5>{name}</h5></Row> */}
                <Row className='mt-3'>
                  <div>
                    Questions Answered: <h5 style={{ display: 'inline-block' }}>{answerNumber}</h5>
                  </div>
                </Row>
                <Row className='mt-2'>
                  <div>
                    Questions Asked: <h5 style={{ display: 'inline-block' }}>{questionNumber}</h5>
                  </div>
                </Row>
              </Col>
              <Col xs={1} className='divider'></Col>
              <Col style={{ marginLeft: '-8%' }}>
                <h5 style={{ width: '100%', marginTop: '11%' }}>Score</h5>
                <Button className='justify-content-center' variant='success' size='lg'>{totalNumber}</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>


    );
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id]
  };
}

export default connect(mapStateToProps)(Award);