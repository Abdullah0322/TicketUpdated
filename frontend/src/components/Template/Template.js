import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

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
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteTemplate(id));
    }
  };

  var dateString = moment(template.createdAt).format("DD/MM/YYYY");
  return (
    <>
      <Container fluid>
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
