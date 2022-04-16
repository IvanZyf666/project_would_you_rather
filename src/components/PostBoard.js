import React, { Component } from 'react';
import Post from './Post';

class PostBoard extends Component {
	render() {
		const { questions, isAnswered } = this.props;
		return (
			<div>
				{questions ? (
					questions.map((question) =>
						<Post key={question.id} id={question.id} isAnswered={isAnswered} />
						// <PostPage key={question.id} id={question.id} isAnswered={isAnswered} />
					)
				) : (
					<p> Empty Question List </p>
				)}
			</div>
		)
	}
}

export default PostBoard;