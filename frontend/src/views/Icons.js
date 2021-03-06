
// react-bootstrap components

import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import NotificationAlert from "react-notification-alert";
import axios from "axios";
import SERVER from "../globals";

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

function Icons({history,location}) {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [cc,setCC]=useState("")
  const useremail=localStorage.getItem("email");
  const submitHandler = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("response"));

    const token=user.data.token
    const useremail = user.data.user.email;

  const datatosend={
    name,
    email,
    cc,
  }

  console.log(datatosend)
  console.log(cc)
    const id = user.data.user._id;
    console.log(token)
    axios.post(`${SERVER}/api/sendmail/${id}` ,datatosend).then(notify("tc",`Email sent to ${email} CC:${cc}`))
 

  }

  const notificationAlertRef = React.useRef(null);
  const notify = (place,message) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    var message;
    switch (color) {
      
      case 1:
        type = "success";
        break;
      case 2:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      
      message: message,
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlertRef.current.notificationAlert(options);
  };
  const isLoggedIn = () => {
    return localStorage.getItem("response") ? true : false;
  };
  const redirect = location.search ? location.search.split("=")[1] : "/login";
  useEffect(() => {
    if (!isLoggedIn()) {
      history.push(redirect);
    
    }
  
  }, []);

  return (
    <>
    <Meta></Meta>
    <div className="rna-container">
        <NotificationAlert ref={notificationAlertRef} />
      </div>
      <Container fluid>
        <Row>
        <Col xs={12} md={6}>
            <h3>Send Email</h3>
              <Form onSubmit={
                
                submitHandler
                
                }>
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
                    type="name"
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

                <Button  type="submit"  variant="primary">
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
