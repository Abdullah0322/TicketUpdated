import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Table } from "react-bootstrap";
import Message from "../Message/Message.js";
import Loader from "../Loader/Loader";
import Meta from "../Meta/Meta";
import axios from "axios";
import { listuserDetails } from "../../actions/userActions";

const UserTicketScreen = ({ match }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  // const redirect = location.search ? location.search.split("=")[1] : "/login";
  // useEffect(() => {
  // //   if (!isLoggedIn()) {
  // //     history.push(redirect);
  // //   }
  // }, []);
  useEffect(() => {
    if (!user._id || user._id !== match.params.id) {
      dispatch(listuserDetails(match.params.id));
    }
  }, [dispatch, match]);

  return (
    <div>
      <Meta></Meta>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {user.tickets &&
            user.tickets.map((head, i) => (
              <Table className="table table-borderless" variant="dark">
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

export default UserTicketScreen;
