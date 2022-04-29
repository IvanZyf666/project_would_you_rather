import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
function PageNotFound() {
	return (
		<Fragment>
			<div className="vh-100">
				<h1 className="text-center mt-5">Page Not Found</h1>
				<h3 className="text-center">
					<Link to="/" style={{ color: 'green' }}>Return to Home Page</Link>
				</h3>
			</div>
		</Fragment>
	)
}
export default PageNotFound 