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
	return (
		<Question id={id}/>
	)
}
export default QuestionPage;