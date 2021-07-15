import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
} from "react-bootstrap";
import { listUsers } from "../../actions/userActions";
import Message from "../Message/Message.js";
import Loader from "../Loader/Loader";
import Meta from "../Meta/Meta"
import UserScreen from "./User";

const Superview = ({location,history}) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  let { loading, error, users } = userList;
  let comment = JSON.parse(localStorage.getItem("response"));
  const redirect = location.search ? location.search.split("=")[1] : "/login";
  const isLoggedIn = () => {
    return localStorage.getItem("response") ? true : false;
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      history.push(redirect);
    }
    dispatch(listUsers());
  }, [dispatch]);
  return (
    <>
    <Meta></Meta>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant="danger">{error}</Message>
    ) : (
      <Container fluid>
        
        {
       comment && comment.data.user.isAdmin==true?
        users &&
          users.map((user) => (
            <Col key={user._id} md={12}>
              <UserScreen user={user} />
            </Col>
          ))
        :"You Must be Super Admin to See All Tickets"
        }
      </Container>
    )}
  </>

  );
};
export default Superview;
