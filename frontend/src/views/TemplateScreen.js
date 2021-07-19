import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Table } from "react-bootstrap";
import Message from "../components/Message/Message.js";
import Loader from "../components/Loader/Loader.js";
import Ticket from "../components/Ticket/Ticket.js";
import Meta from "../components/Meta/Meta.js";
import axios from "axios";
import { listTemplateDetails } from "../actions/templateActions";
import SERVER from "../globals";
import NotificationAlert from "react-notification-alert";
import Button from "@material-ui/core/Button";
import './table.css'
const TemplateScreen = ({ history, location, match }) => {
  const dispatch = useDispatch();

  const templateDetails = useSelector((state) => state.templateDetails);
  const { loading, error, template } = templateDetails;
  const isLoggedIn = () => {
    return localStorage.getItem("response") ? true : false;
  };
  const redirect = location.search ? location.search.split("=")[1] : "/login";
  useEffect(() => {
    if (!isLoggedIn()) {
      history.push(redirect);
    }
  }, []);
  useEffect(() => {
    if (!template._id || template._id !== match.params.id) {
      dispatch(listTemplateDetails(match.params.id));
    }
  }, [dispatch, match]);

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
  const getTickets = async () => {
    const a =
      template.tickets &&
      template.tickets.map((t) => {
        delete t._id;
        t.isSelected = [];
        t.isSelectedticket = true;

        // const  { _id ,...ticket} = t
        // const {isSelected,...b}=t
        //   return {
        //     b: []
        //     // ...ticket
        //   }
        //   //
      });

    console.log("template.tickets._id: ", template.tickets);

    const user = JSON.parse(localStorage.getItem("response"));
    const id = user.data.user._id;
    axios
      .put(`${SERVER}/api/tickets/clone/${id}`)
      .then(function (response) {
        axios
          .post(`${SERVER}/api/tickets/newtickets`, template.tickets)
          .then(notify("tc", "Template Cloned"));

        // console.log("pushing in this ticket",ticket.isSelected)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Meta></Meta>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <NotificationAlert ref={notificationAlertRef} />

          <Button variant="contained" color="primary" onClick={getTickets}>
            {" "}
            Clone Template
          </Button>
         
         
          {template.tickets &&
            template.tickets.map((head, i) => (
              <Table className="table table-borderless"  variant="dark">
                <thead>
                  <tr>
                    {head.heading.map((hea) => (
                      <th>
                        <h6 className="head">{hea}</h6>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {head.body.map((hea) => (
                      <td>
                        <h6>{hea}</h6>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {head.heading2.map((hea) => (
                      <td>
                        <h6 className="head">{hea}</h6>
                      </td>
                    ))}
                  </tr>

                  <tr>
                    {head.body2.map((hea) => (
                      <td>
                        <h6>{hea}</h6>
                      </td>
                    ))}
                  </tr>
                </tbody>
                {/* <tbody>
            <tr>
              {ticket.body.map((body, i) => (
                <td key={i}>
                  {}

                  <div className="body"> {body}</div>
                </td>
              ))}
            </tr>
            <tr>
              {ticket.heading2.map((head2, i) => (
                <td key={i}>
                  <h6 className="head">
                    <b>{head2}</b>
                  </h6>
                </td>
              ))}
            </tr>
            <tr>
              {ticket.body2.map((body2, i) => (
                <td key={i}>
                  <div className="body"> {body2}</div>
                </td>
              ))}
            </tr>
          </tbody> */}
              </Table>
            ))}
        </Row>
      )}
    </div>
  );
};

export default TemplateScreen;
