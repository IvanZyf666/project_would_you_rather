import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

class PostBoard extends Component {
	render() {
		const { questions, isAnswered } = this.props;
		return (
			<div>
				{questions && (questions.map((question) =>
					<Post key={question.id} id={question.id} isAnswered={isAnswered} />
				))}
				{!isAnswered && !questions.length &&
					<h4 style={{ textAlign: 'center', color: 'gray' }}>
						No More Questions! <Link to='/NewQuestion' style={{ color: 'green' }}>Make a new one!</Link>
					</h4>
				}
			</div>
		)
	}
}

export default PostBoard;