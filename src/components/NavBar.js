import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { resetAuthedUser } from '../actions/authedUser';
import Avatar from './Avatar';
import { Row } from 'react-bootstrap';

function NavBar(props) {
    const { user, dispatch } = props;

    const handleLogout = () => {
        dispatch(resetAuthedUser());
    };

    return (
        <Navbar expand="lg" bg="light" variant="light" className="m-4 border border-success" style={{borderRadius:'8px'}}>
            <Navbar.Brand as={Link} to="/" className='ms-4 mt-1'>
                <h2>
                    <small>Would You Rather?</small>
                </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-start ms-3">
                <Nav className="">
                    <Nav.Link as={NavLink} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/NewQuestion">
                        New Question
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/AwardBoard">
                        Leaderboard
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <div className="justify-content-end">
                <Navbar.Text>{user.name}</Navbar.Text>
                <Avatar avatarURL={user.avatarURL} size="50" className="mx-3" />
                <Button
                    variant="outline-success"
                    onClick={handleLogout}
                    className="mt-3 mt-lg-0 me-4"
                >
                    Logout
                </Button>
            </div>
        </Navbar>
    );
}

function mapStateToProps({ users, authedUser }) {
    return {
        user: users[authedUser]
    };
}

export default connect(mapStateToProps)(NavBar);
