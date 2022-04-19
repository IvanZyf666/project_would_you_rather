import React from 'react';
import { Card } from 'react-bootstrap';
import Avatar from './Avatar';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import Percentage from './Percentage';
import { useParams, Navigate } from 'react-router-dom';
import Question from './Question';

function QuestionPage(props) {
	const { id } = useParams();
	console.log(props.questionIDs.includes(id))
	if (!props.questionIDs.includes(id)) {
		return <Navigate to='/PageNotFound' />
	}
	else {
		return (
			<Question id={id} />
		)
	}
}

function mapStateToProps({ questions }) {
	return {
		questionIDs: Object.keys(questions)
	}
}

export default connect(mapStateToProps)(QuestionPage);