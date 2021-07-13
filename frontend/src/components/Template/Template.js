import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import moment from 'moment'

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
  var dateString = moment(template.createdAt).format("DD/MM/YYYY");
  return (

    <>
      <Container fluid>
      <Card className='my-3 p-3 rounded'>
      <Link to={`admin/template/${template._id}`}>
       
      </Link>

      <Card.Body>
        <Link to={`/admin/template/${template._id}`}>

          <Card.Title as='div'>
             Template Created At: 
            <strong>{ dateString}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
        Id : {template._id}
        </Card.Text>

        
      </Card.Body>
    </Card>
      </Container>
    </>
  );
};

export default Template;
