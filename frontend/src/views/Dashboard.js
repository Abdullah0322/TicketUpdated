import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SERVER from "../globals";
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
  listTicketsall,
} from "../actions/ticketActions";

import Message from "../components/Message/Message.js";
import Loader from "../components/Loader/Loader.js";
import Ticket from "../components/Ticket/Ticket.js";
import Superview from "../components/Superview/Superview.js";
import Meta from "../components/Meta/Meta.js";
import "./dashboard.css";
import axios from "axios";
import NotificationAlert from "react-notification-alert";

function Dashboard({ match, location, history }) {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const ticketList = useSelector((state) => state.ticketList);

  let { loading, error, tickets, page, pages } = ticketList;

  // let { loading, error, tickets, page, pages } = ticketListall;

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
  const redirect = location.search ? location.search.split("=")[1] : "/login";
  const isLoggedIn = () => {
    return localStorage.getItem("response") ? true : false;
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      history.push(redirect);
    }
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
  ]);

  // useEffect(()=>{

  // },[tickets])

  const createProductHandler = () => {
    const user = JSON.parse(localStorage.getItem("response"));
    const id = user.data.user._id;
    console.log();
    dispatch(createTicket(id));
  };

  const deleteAll = () => {
    axios.delete(`${SERVER}/api/tickets/`);
    window.location.reload();
  };

  console.log(tickets);

  const saveTemplate = () => {
    const user = JSON.parse(localStorage.getItem("response"));
    const id = user.data.user._id;
    axios
      .post(`${SERVER}/api/template`, { id })
      .then(function (response) {
        axios
          .post(`${SERVER}/api/tickets/addtemp/${id}`, { item: response.data._id })
          .then(notify("tc", "Template Saved"));

        // console.log("pushing in this ticket",ticket.isSelected)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
  const text = "hello world";
  return (
    <>
      <Meta></Meta>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container fluid>
          <div className="rna-container">
            <NotificationAlert ref={notificationAlertRef} />
          </div>
          <Row>
            {/* <Button href="https://ticketupdater.herokuapp.com/api/sendmail">Click Button</Button> */}

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
                        <Card.Title as="h4">
                          {" "}
                          {localStorage.getItem("response") ? (
                            <Button
                              className="btn-sm"
                              onClick={createProductHandler}
                            >
                              Create Row
                            </Button>
                          ) : (
                            <h6>You must be admin to create </h6>
                          )}
                        </Card.Title>
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
                        <Card.Title as="h4">
                          {" "}
                          {comment ? comment.data.user.name : "Please Login"}
                        </Card.Title>
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
                        <Card.Title as="h4">
                          {localStorage.getItem("response") ? (
                            <Button
                              variant="danger"
                              className="btn-sm"
                              onClick={deleteAll}
                            >
                              Delete All Rows
                            </Button>
                          ) : (
                            <h6>You must be admin to Delete</h6>
                          )}
                        </Card.Title>
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
                        <p className="card-category">Save Current Template</p>
                        <Card.Title as="h4">
                          {localStorage.getItem("response") ? (
                            <Button variant="contained" onClick={saveTemplate}>
                              Save Template
                            </Button>
                          ) : (
                            <h6>You must be admin to Delete</h6>
                          )}
                        </Card.Title>
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
            {
              tickets &&
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
