import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginPage extends Component {
  state = {
    errorMsg: ''
  }

  handleSubmit = (e) => {
    const userID = this.userID.value;
    const { dispatch } = this.props;
    e.preventDefault();
    if(userID!==''){
      dispatch(setAuthedUser(userID));
    }
    else{
      this.setState({ errorMsg: 'Please choose a user' });
    }
  }


  render() {
    const { userNames } = this.props;
    const { errorMsg } = this.state;
    return (
      <Row className="d-flex align-items-center justify-content-center vh-100" style={{marginTop:'-120px'}}>
        <Col xs={12} md={4}>
          <Card bg="light" className="text-center border-success">
            <Card.Header style={{ borderBlockColor: 'green' }}>Login</Card.Header>
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  {errorMsg !== '' ? (
                    <p className="text-danger">{errorMsg}</p>
                  ) : null}
                  <Form.Control
                    as="select"
                    ref={(id) => (this.userID = id)}>
                    <option value="">Select User</option>
                    {userNames.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button type="submit" variant="outline-success">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    );
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
