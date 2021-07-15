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
import { listTemplates } from "../actions/templateActions";

import Message from "../components/Message/Message.js";
import Loader from "../components/Loader/Loader.js";
import Ticket from "../components/Ticket/Ticket.js";
import Meta from "../components/Meta/Meta.js";
import Template from "components/Template/Template";

function Notifications({ match, history, location }) {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

  const templateList = useSelector((state) => state.templateList);
  let { loading, error, templates, page, pages } = templateList;

  const redirect = location.search ? location.search.split("=")[1] : "/login";

  const templateDelete = useSelector((state) => state.templateDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = templateDelete;
  const isLoggedIn = () => {
    return localStorage.getItem("response") ? true : false;
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      history.push(redirect);
    }
    dispatch(listTemplates(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber, successDelete]);
  console.log(templates);

  
  return (
    <>
      <Meta></Meta>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container fluid>
          {templates &&
            templates.map((template) => (
              <Col key={template._id} md={12}>
                <Template template={template} />
              </Col>
            ))}
        </Container>
      )}
    </>

    // <>

    //   <Container fluid>
    //     <Card>
    //       <Card.Header>
    //         <Card.Title as="h4">Template</Card.Title>

    //       </Card.Header>
    //       <Card.Body>
    //         <Row>
    //           <Col md="12">

    //           </Col>
    //         </Row>

    //       </Card.Body>
    //     </Card>
    //     {/* Mini Modal */}

    //     {/* End Modal */}
    //   </Container>
    // </>
  );
}

export default Notifications;
