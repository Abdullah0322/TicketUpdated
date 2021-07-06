import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {
  listTickets,
  deleteTicket,
  createTicket,
} from "../actions/ticketActions";

import Message from "../components/Message/Message.js";
import Loader from "../components/Loader/Loader.js";
import Ticket from "../components/Ticket/Ticket.js";
import Meta from "../components/Meta/Meta.js";
import "./dashboard.css"
import axios from "axios"

function Dashboard({ match }) {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const ticketList = useSelector((state) => state.ticketList);
  let { loading, error, tickets, page, pages } = ticketList;

  const ticketDelete = useSelector((state) => state.ticketDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = ticketDelete;

  const ticketCreate = useSelector((state) => state.ticketCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    ticket: createdTicket,
  } = ticketCreate;

  const ticketHeadingCreate = useSelector((state) => state.ticketHeadingCreate);
  const {
    success: successHeadingCreate,
    loading: loadingHeadingCreate,
    error: errorHeadingCreate,
  } = ticketHeadingCreate;
  const ticketUpdate = useSelector((state) => state.ticketUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = ticketUpdate;

  const ticketHeading2Create = useSelector(
    (state) => state.ticketHeading2Create
  );
  const {
    success: successHeading2Create,
    loading: loadingHeading2Create,
    error: errorHeading2Create,
  } = ticketHeading2Create;

  const ticketHeadingDelete = useSelector((state) => state.ticketHeadingDelete);
  const {
    success: successHeadingDelete,
    loading: loadingHeadingDelete,
    error: errorHeadingDelete,
  } = ticketHeadingDelete;

  const ticketDuplicate = useSelector((state) => state.ticketDuplicate);
  const {
    success: successticketDuplicate,
    loading: loadingticketDuplicate,
    error: errorticketDuplicate,
  } = ticketDuplicate;

  const ticketHeading2Delete = useSelector(
    (state) => state.ticketHeading2Delete
  );
  const {
    success: successHeading2Delete,
    loading: loadingHeading2Delete,
    error: errorHeading2Delete,
  } = ticketHeading2Delete;

  const [localtickets, setTickets] = useState([]);
  let comment = JSON.parse(localStorage.getItem("response"));

  useEffect(() => {
    dispatch(listTickets(keyword, pageNumber));
  }, [
    dispatch,
    keyword,
    pageNumber,
    successCreate,
    successDelete,
    createdTicket,
    successticketDuplicate,
    ticketDuplicate,
    // successHeadingCreate,
    successUpdate,
    // successHeading2Create,
    // successHeadingDelete,
    // successHeading2Delete,
  ]);

  useEffect(() => {
    setTickets(tickets);
  }, [tickets]);

  // useEffect(()=>{

  // },[tickets])

  const createProductHandler = () => {
    dispatch(createTicket());
  };

  const deleteAll = () => {
    axios.delete("https://ticketupdater.herokuapp.com/api/tickets/");
    window.location.reload();
  };

  return (
    <>
    <Meta></Meta>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Number of Items</p>
                      <Card.Title as="h4">{tickets.length}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Create</p>
                      <Card.Title as="h4"> {localStorage.getItem("response") ? (
                            <Button
                              className="btn-sm"
                              onClick={createProductHandler}
                            >
                              Create  Row
                            </Button>
                          ) : (
                            <h6>You must be admin to create </h6>
                          )}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">User Details</p>
                      <Card.Title as="h4">  {comment ? comment.data.user.name : "Please Login"}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  {comment ? comment.data.user.email : ""}
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Delete All</p>
                      <Card.Title as="h4">{localStorage.getItem("response") ? (
                              <Button
                                variant="danger"
                                className="btn-sm"
                                onClick={deleteAll}
                              >
                                Delete All Rows
                              </Button>
                            ) : (
                              <h6>You must be admin to Delete</h6>
                            )}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      

        <Row>
        {tickets &&
              tickets.map((ticket) => (
                <Col key={ticket._id} md={12}>
                  <Ticket ticket={ticket} />
                </Col>
              ))}
        </Row>
      </Container>
       )}
    </>
      
  );
}

export default Dashboard;
