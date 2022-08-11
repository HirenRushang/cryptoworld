import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { UserAuth } from "../../context/AuthContext";
import ToggleButton from "./ToggleButton";
import "./Navigation.css"

const Navigation = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container-fluid navigation_wrapper">
        <div className="container">
        <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <div className="brand_logo">
        <Link to="/">
          <Navbar.Brand>Duumy.Crypto__Word</Navbar.Brand>
        </Link>
        </div>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="otherside_navbar">
          <Nav>
            <div className="togglethemebtn">
            <ToggleButton />
            </div>
             
          </Nav>
          <Nav>
            {user?.email ? (
              <div className="user_account_signout">
                <LinkContainer to="/account">
                  <Nav.Link>Account</Nav.Link>
                </LinkContainer>
                <button onClick={handleSignOut}>Sign Out</button>
              </div>
            ) : (
              <div className="user_signin_signout">
                <LinkContainer to="/signin">
                  <Nav.Link>Sign in</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signup">
                  <Nav.Link>Sing up</Nav.Link>
                </LinkContainer>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    </div>
    
    
  );
};

export default Navigation;
