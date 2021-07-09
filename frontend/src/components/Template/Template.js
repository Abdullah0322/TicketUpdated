import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'

// react plugin for creating notifications over the dashboard
// react-bootstrap components
import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";


const Template = ({ template }) => {
  return (

    <>
      <Container fluid>
      <Card className='my-3 p-3 rounded'>
      <Link to={`admin/template/${template._id}`}>
       
      </Link>

      <Card.Body>
        <Link to={`/admin/template/${template._id}`}>
          <Card.Title as='div'>
            <strong>{template.createdAt}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
         Number of Tickets: 10
        </Card.Text>

        
      </Card.Body>
    </Card>
      </Container>
    </>
  );
};

export default Template;
