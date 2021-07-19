import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import NotificationAlert from "react-notification-alert";
import axios from 'axios'
import SERVER from "../../globals";

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
import Button from "@material-ui/core/Button";

import { deleteTemplate } from "actions/templateActions";

const Template = ({ template }) => {
  const notificationAlertRef = React.useRef(null);
  const notify = (place, message) => {
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

  var dateString = moment(template.createdAt).format("DD/MM/YYYY");
  return (
    <>
      <Container fluid>
        <NotificationAlert ref={notificationAlertRef} />
        <Card className="my-3 p-3 rounded">
          <Link to={`admin/template/${template._id}`}></Link>

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
