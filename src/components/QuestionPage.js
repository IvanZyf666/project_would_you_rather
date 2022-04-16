import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Avatar from './Avatar';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import Percentage from './Percentage';
import { useParams } from 'react-router-dom';
import Question from './Question';

function QuestionPage(props) {
	const { id } = useParams();
	// const { id, timestamp, optionOne, optionTwo } = this.props.question;
	// const { name, avatarURL } = this.props.author;
	// const { isAnswered } = this.props;

	// const totalVotes = optionOne.votes.length + optionTwo.votes.length;
	// const optionOneVotes = optionOne.votes.length;
	// const optionTwoVotes = optionTwo.votes.length;
	// const optionOnePercent = Math.round((optionOneVotes / totalVotes) * 100);
	// const optionTwoPercent = Math.round((optionTwoVotes / totalVotes) * 100);

	return (
		// <div>QuestionPage</div>
		<Question id={id} isAnswered={true} />
		// <Row className="justify-content-center">
		// 	<Col md={6}>
		// 		<Card bg='light' className='mb-2 border border-success' style={{ borderRadius: '8px' }}>
		// 			<Card.Header style={{ borderBlockColor: 'green' }}>{name} asks</Card.Header>
		// 			<Card.Body>
		// 				<Row>
		// 					<Col xs={3}>
		// 						<Avatar avatarURL={avatarURL} size="140" />
		// 					</Col>
		// 					<Col style={{ marginLeft: '4px' }}>
		// 						{isAnswered ? (
		// 							<div>
		// 								<h5 className='mb-1'>Results:</h5>
		// 								<h6 style={{ color: 'grey' }}>Would you rather</h6>
		// 								<Percentage option={optionOne} totalVotes={totalVotes} />
		// 								<Percentage option={optionTwo} totalVotes={totalVotes} />
		// 							</div>
		// 						) : (
		// 							<div>
		// 								<h5>Would you rather ?</h5>
		// 								<Button className='mb-2 ms-5' variant='outline-success'>{optionOne.text}</Button>
		// 								<br />
		// 								<Button className='ms-5' variant='outline-success'>{optionTwo.text}</Button>
		// 							</div>
		// 						)}

		// 					</Col>
		// 				</Row>
		// 			</Card.Body>
		// 			<Card.Footer>
		// 				{/* <small className="text-muted">{timestamp}</small> */}
		// 			</Card.Footer>
		// 		</Card>
		// 	</Col>
		// </Row>
	)
}

function mapStateToProps({ questions, users }) {
}

export default connect(mapStateToProps)(QuestionPage);