
// react-bootstrap components

import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Meta from "Meta/Meta";
import SERVER from "globals";

function Icons() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [cc,setCC]=useState("")
  const useremail=localStorage.getItem("email");
  const submitHandler = (e) => {
    e.preventDefault();

  const datatosend={
    name,
    email,
    cc
  }
  console.log(datatosend)
  axios.post(`https://ticketupdater.herokuapp.com/api/sendmail` ,datatosend)

  }

  return (
    <>
    <Meta></Meta>
      <Container fluid>
        <Row>
        <Col xs={12} md={6}>
            <h3>Send Template as Email</h3>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="name">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="name">
                  <Form.Label>CC</Form.Label>
                  <Form.Control
                    type="cc"
                    placeholder="Enter CC"
                    value={cc}
                    name="cc"
                    onChange={(e)=>setCC(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button  type="submit" variant="primary">
                  Send Mail
                </Button>
              
              </Form>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default Icons;
