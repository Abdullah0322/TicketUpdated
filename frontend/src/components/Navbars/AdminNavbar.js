import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import routes from "routes.js";

const logout = ({history}) => {
  localStorage.removeItem("response");
  localStorage.removeItem("email");
  window.location.reload();
};
let comment = JSON.parse(localStorage.getItem("response"));
console.log(comment);

function Header({history}) {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar></Nav>
          <Nav className="ml-auto" navbar>
            <Nav.Item>
              {comment ? (
                <NavDropdown title={comment.data.user.name} id="username">
                  <NavDropdown.Item onClick={logout}>
                    {`Logout`}
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                ""
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
