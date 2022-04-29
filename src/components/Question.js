import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Avatar from './Avatar';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import Percentage from './Percentage';
import { Link } from 'react-router-dom';
import { handleAddAnswer } from '../actions/posts';

class Question extends Component {
	render() {
		const { id, timestamp, optionOne, optionTwo } = this.props.question;
		const { name, avatarURL } = this.props.author;
		const { autherUserAnswers, dispatch } = this.props;
		const isAnswered = autherUserAnswers.hasOwnProperty(id);

		const totalVotes = optionOne.votes.length + optionTwo.votes.length;

		const handlePoll = vote => {
			dispatch(handleAddAnswer(id, vote));
		}

		return (
			<Row className="justify-content-center mt-4 vh-100">
				<Col md={5}>
					<Card bg='light' className='mb-2 border border-success' style={{ borderRadius: '8px' }}>
						<Card.Header style={{ borderBlockColor: 'green' }}>
							{name} asks
							{/* Make a button right: float-end or float:'right' */}
							<Link to='/'>
								<Button className='float-end' variant='outline-success' size='sm'>back</Button>
							</Link>
						</Card.Header>

						<Card.Body>
							<Row>
								<Col xs={3}>
									<Avatar avatarURL={avatarURL} size="140" />
								</Col>
								<Col xs={1} className='divider'></Col>
								<Col xs={7} className='' >
									{isAnswered ? (
										<div>
											<h5 className='mb-1'>Results:</h5>
											<h6 style={{ color: 'grey' }}>Would you rather</h6>
											<Percentage option={optionOne} totalVotes={totalVotes} />
											<Percentage option={optionTwo} totalVotes={totalVotes} />
										</div>
									) : (
										<div className=''>
											<h5>Would you rather ?</h5>
											<Button className='mb-2 ms-5' variant='outline-success' onClick={() => handlePoll('optionOne')}>{optionOne.text}</Button>
											<br />
											<Button className='m-auto ms-5' variant='outline-success' onClick={() => handlePoll('optionTwo')}>{optionTwo.text}</Button>
										</div>
									)}
								</Col>
							</Row>
						</Card.Body>
						<Card.Footer>
							{/* <small className="text-muted">{timestamp}</small> */}
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		)
	}
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
	const question = questions[id];
	const autherUserAnswers = users[authedUser].answers;

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
		autherUserAnswers: autherUserAnswers,
	};
}

export default connect(mapStateToProps)(Question);