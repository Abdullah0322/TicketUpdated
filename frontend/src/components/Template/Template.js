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
  Table,
} from "react-bootstrap";

const Template = ({ template }) => {
  return (
    <>
      <Container fluid>
        <Card>
          <Card.Header>Ticket</Card.Header>
          <Card.Body>
            <Row>
              <Table className="table table-borderless" variant="dark">
                <thead>
                  <tr>
                    {template &&
                      template.heading.map((head, i) => (
                        <th key={i}>
                          <h6 className="head">{head}</h6>
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {template &&
                    template.body.map((head, i) => (
                      <td key={i}>
                        <h6>{head}</h6>
                      </td>
                    ))}

                  <tr>
                  {template &&
                    template.heading2.map((head, i) => (
                      <td key={i}>
                        <h6 className="head">{head}</h6>
                      </td>
                    ))}
                  </tr>

                  <tr>
                  {template &&
                    template.body2.map((head, i) => (
                      <td key={i}>
                        <h6>{head}</h6>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Card.Body>
        </Card>
        {/* Mini Modal */}

        {/* End Modal */}
      </Container>
    </>
  );
};

export default Template;
