import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Alert,
  Badge,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Button from "@material-ui/core/Button";

const UserScreen = ({ user }) => {
  return (
    <>
      <Container fluid>
        <Card className="my-3 p-3 rounded">
          <Link to={`admin/${user._id}`}></Link>

          <Card.Body>
            <Link to={`/admin/${user._id}`}>
              <Card.Title as="div">
                Name:
                <strong>{user.name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as="div">Email : {user.email}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default UserScreen;
