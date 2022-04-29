import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { handleAddQuestion } from '../actions/posts';
import { Navigate } from 'react-router-dom';

class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		toHome: false
	};

	handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		const { optionOne, optionTwo } = this.state;
		const { dispatch } = this.props;

		e.preventDefault();

		this.setState(
			{
				optionOne: '',
				optionTwo: '',
				toHome: true
			},
			() => dispatch(handleAddQuestion(optionOne, optionTwo))
		);
	};

	render() {
		const { optionOne, optionTwo, toHome } = this.state;

		if (toHome === true) return <Navigate to="/" />;

		const style = {
			border: '1px solid green',
			borderRadius: '8px',
			textAlign: 'center',
			width: '46%',
			margin: 'auto',
			marginTop: '24px',
			backgroundColor: '#f5f5f5',
		}

		return (
			<div style={{minHeight: '100vh'}}>
				<div style={style}>
					<Row className='ms-5 me-5 mt-2 mb-1 border-bottom border-success' variant='' style={{ textAlign: 'start' }}>
						<h3 className='m-2'>Would You Rather...</h3>
					</Row>
					<Row className="justify-content-center">
						<Col md={7}>
							<Card bg="light" className="m-4 text-center border-success">
								<Card.Body>
									<Form onSubmit={this.handleSubmit}>
										<Form.Group controlId="optionOne">
											<Form.Label>Choice One</Form.Label>
											<Form.Control
												type="text"
												name="optionOne"
												value={optionOne}
												onChange={this.handleInputChange}
												maxLength="28"
											/>
										</Form.Group>
										<h3>
											<small>OR</small>
										</h3>
										<Form.Group controlId="optionTwo">
											<Form.Label>Choice Two</Form.Label>
											<Form.Control
												type="text"
												name="optionTwo"
												value={optionTwo}
												onChange={this.handleInputChange}
												maxLength="28"
											/>
										</Form.Group>
										<Button
											className="mt-3"
											type="submit"
											variant="outline-success"
											disabled={optionOne === '' || optionTwo === ''}
										>
											Submit
										</Button>
									</Form>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default connect()(NewQuestion);
