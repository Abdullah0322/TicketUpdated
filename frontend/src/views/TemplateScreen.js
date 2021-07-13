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

const getTickets = async () => {
  const data = await axios.get(
    `http://localhost:5000/api/template/60e82171bf070c20d191ad3a`
  );
  console.log("data", data);
  console.log(data.data.tickets[0].heading);

  return (
    <div>
      <h6>{data.data.tickets[0].heading}</h6>
    </div>
  );
};
const TemplateScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const templateDetails = useSelector((state) => state.templateDetails);
  const { loading, error, template } = templateDetails;
  useEffect(() => {
    if (!template._id || template._id !== match.params.id) {
      dispatch(listTemplateDetails(match.params.id));
    }
  }, [dispatch, match]);

  console.log(template.tickets);

  return (
    <div>
      <Meta></Meta>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {template.tickets &&
            template.tickets.map((head, i) => (
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

export default TemplateScreen;
