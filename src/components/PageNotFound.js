import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
function PageNotFound() {
  return (
    <Fragment>
			<h1 className="text-center mt-4">Page Not Found</h1>
			<h3 className="text-center">
				<Link to="/" style={{color: 'green'}}>Return to Home Page</Link>
			</h3>
		</Fragment>
  )
}
export default PageNotFound 