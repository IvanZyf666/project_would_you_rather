import React, { Component } from 'react';
import { connect } from 'react-redux'
class LoginPage extends Component {
  render() {
    console.log(this)
    return (
      <div> "login"</div >
    )
  }
}

function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(LoginPage);
