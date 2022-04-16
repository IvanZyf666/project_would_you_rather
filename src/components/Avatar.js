import React from 'react';
import Image from 'react-bootstrap/Image';

function Avatar(props) {
	const { avatarURL, className, size } = props;
	return (
		<Image
			src={avatarURL}
			roundedCircle
			fluid
			width={size}
			height={size}
			className={className}
			alt="user avatar"
		/>
	);
}

export default Avatar;
