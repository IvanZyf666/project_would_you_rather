import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

class Post extends Component {
	render() {
		const { id, timestamp, optionOne, optionTwo } = this.props.question;
		const { name, avatarURL } = this.props.author;
		const { isAnswered } = this.props;
		
		
		return (
			<Row className="justify-content-center">
				<Col md={8}>
					<Card bg='light' className='mb-3 border border-success' style={{ borderRadius: '8px' }}>
						<Card.Header style={{ borderBlockColor: 'green' }}>{name} asks</Card.Header>
						<Card.Body>
							<Row>
								<Col xs={3}>
									<Avatar avatarURL={avatarURL} size="140" />
								</Col>
								<Col xs={1} className='divider'></Col>
								<Col xs={8} className='justify-content-center'>
									<Card.Title>Would you rather</Card.Title>
									<Card.Text className='mb-0 me-5 mt-2' style={{ fontSize: '20px', textAlign: 'center' }}>{optionOne.text}</Card.Text>
									<Card.Text className='mb-0 me-5' style={{ textAlign: 'center' }}>or...</Card.Text>
									<Link to={`/questions/${id}`}>
										{isAnswered ? (
											<Button className='w-75 ms-3 mt-2' variant='outline-success'> View Results → </Button>
										) : (
											<Button className='w-75 ms-3 mt-2' variant='outline-success'> Answer Poll → </Button>
										)}
									</Link>
								</Col>
							</Row>
						</Card.Body>
						<Card.Footer>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		)
	}
}

Post.propTypes = {
  question: PropTypes.object,
	author: PropTypes.object,
};

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(Post);