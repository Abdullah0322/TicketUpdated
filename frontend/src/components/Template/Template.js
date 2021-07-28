import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import axios from 'axios'
import SERVER from "../../globals";
import './template.css'
// react plugin for creating notifications over the dashboard
// react-bootstrap components
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
import {useHistory} from 'react-router'
import Button from "@material-ui/core/Button";

import { deleteTemplate } from "actions/templateActions";

const Template = ({ template,location }) => {
  const history= useHistory()
 

  const UpdateLocal = () => {
    // var existing = localStorage.getItem("id");

    // // If no existing data, use the value by itself
    // // Otherwise, add the new value to it
    // var data = existing ? template._id : existing;

    // // Save back to localStorage
    // localStorage.setItem("id", data)

    const user = JSON.parse(localStorage.getItem("response"));
    const id = user.data.user._id;
    axios.put(`${SERVER}/api/tickets/clone/${id}/${template._id}`)
      .then(function (response) {
        axios.put(`${SERVER}/api/tickets/clonetrue/${id}/${template._id}`)
          .then(notify("tc", "Template Cloned"));

        // console.log("pushing in this ticket",ticket.isSelected)
      })
      .catch(function (error) {
        console.log(error);
      });

    

  };

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteTemplate(id));
    }
  };
  const UpdateLocalTemplate=()=>{
    UpdateLocal()
    

  }
  // const redirect = location.search ? location.search.split("=")[1] : "/login";

  //  console.log("history",history.push("template/:id"))

  var dateString = moment(template.createdAt).format("DD/MM/YYYY");
  return (
    <>
      <Container fluid>
       
        <Card className="customcard" >
         <Link to={`/admin/template/${template._id}`}></Link> 

          <Card.Body>
            <Link to={`/admin/template/${template._id}`}>
              <Card.Title as="div">
                Template Created At:
                <strong>{dateString}</strong>
              </Card.Title>
            </Link>

            <Card.Text as="div">Id : {template._id}</Card.Text>
            <br></br>
            {localStorage.getItem("response") ? (
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => deleteHandler(template._id)}
              >
                Delete
              </Button>
            ) : (
              ""
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Template;
