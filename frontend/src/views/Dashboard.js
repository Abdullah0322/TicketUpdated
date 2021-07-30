import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageButton from 'react-image-button';


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
  listTickets
} from "../actions/ticketActions";
import { listTemplates } from "../actions/templateActions";
import MyImage from 'assets/img/giga.png'
function Dashboard({ match, location, history }) {
  const dispatch = useDispatch();
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  let comment = JSON.parse(localStorage.getItem("response"));
  const redirect = location.search ? location.search.split("=")[1] : "/login";
  const isLoggedIn = () => {

   
  
    return localStorage.getItem("response") ? true : false;
  };
  const ticketList = useSelector((state) => state.ticketList);
  
  let { loading, error, tickets, page, pages } = ticketList;

  const templateList = useSelector((state) => state.templateList);
  let {  templates} = templateList;

  

  useEffect(() => {
    if (!isLoggedIn()) {
      history.push(redirect);
    } dispatch(listTickets(keyword, pageNumber));
    dispatch(listTemplates(keyword, pageNumber));
  }, [
  ]);

  const image=localStorage.getItem("email")
  function func(){	
      
    window.location.href = "https://ticketupdater.herokuapp.com/api/sendmail/" + comment.data.user._id;
  }
  return (
    <>
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
                      <p className="card-category">Tickets</p>
                      <Card.Title as="h4">{tickets && tickets.length}</Card.Title>
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
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Saved Templates</p>
                      <Card.Title as="h4">{templates && templates.length}</Card.Title>
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
                      <i className="nc-icon nc-single-02"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">User Role</p>
                      <Card.Title as="h4">{comment && comment.data.user.isAdmin==false?"Admin":"Super Admin"}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  User Role
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
                      <i className="nc-icon nc-tap-01"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">View Current Template</p>
                      <Card.Title as="h4">                      <Button color="primary" onClick={func}>Template</Button>
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
          <Col md="12">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={image ? image : 'test'}
                    
                      ></img>
                    <h5 className="title">{comment&&comment.data.user.name}</h5>
                  </a>
                  <p className="description">{comment&&comment.data.user.email}</p>
                  {comment&&comment.data.user.isAdmin==false?"Admin":"Super Admin"}
                </div>
                
               
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
              
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={()=>window.open('https://gigalabs.co/')}
                  variant="link"
                  
                >
                <img src={MyImage} alt="my image"  width="100" height="100"></img>
                </Button>
               
              
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;