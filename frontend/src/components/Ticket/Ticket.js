import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // Button,
  Table,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import {
  deleteTicket,
  createTicketHeading,
  createTicketHeading2,
  deleteTicketHeading,
  deleteTicketHeading2,
  createTicket,
  duplicateTicket,
} from "../../actions/ticketActions.js";

import axios from "axios";
import "./ticket.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0, 1, 0),
  },
  edit: {
    backgroundColor: "#21b6ae",
    margin: theme.spacing(0, 1, 0),
  },
}));
const Ticket = ({ ticket }) => {
  const classes = useStyles();
  const [input, setInput] = useState(false);
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);
  const [button, setButton] = useState(false);
  const [button1, setButton1] = useState(false);

  const [button2, setButton2] = useState(false);

  const [response, setResponse] = useState(false);

  const editResponse = () => {
    const getresponse = localStorage.getItem("response");
    if (getresponse) {
      setResponse(true);
    }
  };

  const [button3, setButton3] = useState(false);
  const [allbuttons, setAllbuttons] = useState(false);

  const [headingName, setHeadingName] = useState(ticket.heading);
  const [bodyName, setBodyName] = useState(ticket.body);
  const [bodyName2, setBodyName2] = useState(ticket.body2);
  const [headingName2, setheadingName2] = useState(ticket.heading2);

  const [data, setData] = useState(ticket.heading);
  const [copySuccess, setCopySuccess] = useState("");

  if (ticket.body2[0] == "check.com") {
    console.log(<a href="clickhere to reveal link"></a>);
  } else {
    console.log(ticket.body2[0]);
  }

  const dispatch = useDispatch();

  const deleteheading = (id) => {
    ticket.heading.pop();
    ticket.body.pop();

    dispatch(deleteTicketHeading(ticket._id, {}));
  };

  const deleteheading2 = (id) => {
    ticket.heading2.pop();
    ticket.body2.pop();
    dispatch(deleteTicketHeading2(ticket._id, {}));
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteTicket(id));
    }
  };

  const submitHandler = (e) => {
    const head = "sample name";

    ticket.heading.push(head);
    ticket.body.push(head);

    dispatch(createTicketHeading(ticket._id, {}));
  };

  const submitHand = (e) => {
    const head = "sample name";

    ticket.heading2.push(head);
    ticket.body2.push(head);
    dispatch(createTicketHeading2(ticket._id, {}));
  };
  const handleChange = (e, i) => {
    const clonedData = [...headingName];

    ticket.heading[i] = e.target.value;
  };

  const updateTicke = (e, i) => {
    ticket.heading[i] = headingName;
    axios.post(
      `https://ticketupdater.herokuapp.com/api/tickets/${ticket._id}/heading`,
      ticket.heading
    );
  };

  const testfunction = (e, i) => {
    e.persist();
    handleChange(e, i);
  };

  const testbody = (e, i) => {
    e.persist();
    handleBody(e, i);
  };
  const updateBody = (e, i) => {
    ticket.body[i] = bodyName;
    axios.post(
      `https://ticketupdater.herokuapp.com/api/tickets/${ticket._id}/body`,
      ticket.body
    );
  };

  const handleBody = (e, i) => {
    const clonedData = [...bodyName];
    ticket.body[i] = e.target.value;
  };
  const testHeading = (e, i) => {
    e.persist();
    handleHeading2(e, i);
  };
  const updateHeading2 = (e, i) => {
    ticket.heading2[i] = headingName2;
    axios.post(
      `https://ticketupdater.herokuapp.com/api/tickets/${ticket._id}/heading2`,
      ticket.heading2
    );
  };
  const handleHeading2 = (e, i) => {
    const clonedData = [...headingName2];
    ticket.heading2[i] = e.target.value;
  };

  const testBody2 = (e, i) => {
    e.persist();
    handleBody2(e, i);
  };
  const updateBody2 = (e, i) => {
    ticket.body2[i] = bodyName2;
    axios.post(
      `https://ticketupdater.herokuapp.com/api/tickets/${ticket._id}/body2`,
      ticket.body2
    );
  };
  const handleBody2 = (e, i) => {
    const clonedData = [...bodyName2];
    ticket.body2[i] = e.target.value;
  };

  const handleUpdated = () => {
    if (localStorage.getItem("response")) {
      updateTicke();
    } else {
      alert("You must be admin to update");
    }
  };

  const handleBod = () => {
    if (localStorage.getItem("response")) {
      updateBody();
    } else {
      alert("You must be admin to update");
    }
  };

  const handleHead = () => {
    if (localStorage.getItem("response")) {
      updateHeading2();
    } else {
      alert("You must be admin to update");
    }
  };
  const handleBodyyy2 = () => {
    if (localStorage.getItem("response")) {
      updateBody2();
    } else {
      alert("You must be admin to update");
    }
  };

  const handleDuplicate = () => {
    dispatch(duplicateTicket(ticket));
  };

  return (
    <div id="stats">
      <Row>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleDuplicate}
        >
          Duplicate
        </Button>
        {allbuttons == false ? (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.edit}
            onClick={() => {setAllbuttons(true);
              setInput(true)}
            }
          >
            Edit
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.edit}
            onClick={() => {setAllbuttons(false);
              setInput(false)}
            }
          >
            Update
          </Button>
        )}

        <Button
          variant="contained"
          color="secondary"
          size="small"
          className={classes.root}
          onClick={() => deleteHandler(ticket._id)}
        >
          Delete
        </Button>
        <Table className="table table-borderless" variant="dark">
          <thead>
            <tr>
              {ticket &&
                ticket.heading.map((head, i) => (
                  <th key={i}>
                    {" "}
                    {input == false ? (
                      <h6 className="head">{head}</h6>
                    ) : (
                      <InputGroup className="mb-3">
                        <FormControl
                          placeholder={head}
                          name={head.headingName}
                          value={head.headingname}
                          defaultValue={head}
                          onChange={(e) => testfunction(e, i)}
                          // onChange={set}
                          // value={hea  d && head.name}
                          // onChange={(e) => {
                          //   console.log(head._id);
                          //   setArr(e.target.value);
                          //   // ticket.heading[i].name = e.target.value
                          //  console.log(e.target.name)
                          // }}
                        />
                      </InputGroup>
                    )}
                  </th>
                ))}
              <td>
                {allbuttons == true ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => deleteheading(ticket._id)}
                  >
                    <i className="fas fa-minus"></i>
                  </Button>
                ) : (
                  ""
                )}
                {allbuttons == true ? (
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => submitHandler(ticket._id)}
                  >
                    <i className="fas fa-plus"></i>
                  </Button>
                ) : (
                  ""
                )}
              </td>
              {/* <th>
                <div className="edit">
                  {ticket.heading.length == 0 ? (
                    ""
                  ) : button == false ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        // key = product;

                        setInput(true);
                        setButton(true);
                      }}
                    >
                      <i className="fas fa-edit"></i>
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        // submitHandle();

                        handleUpdated();
                        // key = product;
                        setButton(false);
                        setInput(false);
                      }}
                    >
                      Update
                    </Button>
                  )}
                </div>
              </th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              {ticket.body.map((body, i) => (
                <td key={i}>
                  {}
                  {input == false ? (
                    <div className="body"> {body}</div>
                  ) : (
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder={body}
                        name={body.bodyName}
                        value={body.bodyName}
                        defaultValue={body}
                        onChange={(e) => testbody(e, i)}
                      />
                    </InputGroup>
                  )}
                </td>
              ))}
              {/* <td>
                {" "}
                {ticket.body.length == 0 ? (
                  ""
                ) : button1 == false ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      // key = product;

                      setInput1(true);
                      setButton1(true);
                    }}
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleBod();
                      setButton1(false);
                      setInput1(false);
                    }}
                  >
                    Update
                  </Button>
                )}
              </td> */}
            </tr>
            <tr>
              {ticket.heading2.map((head2, i) => (
                <td key={i}>
                  {input == false ? (
                    <h6 className="head">
                      <b>{head2}</b>
                    </h6>
                  ) : (
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder={head2}
                        name={head2.bodyName}
                        value={head2.bodyName}
                        defaultValue={head2}
                        onChange={(e) => testHeading(e, i)}
                      />
                    </InputGroup>
                  )}
                </td>
              ))}
              <td>
                {allbuttons == true ? (
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => submitHand(ticket._id)}
                  >
                    <i className="fas fa-plus"></i>
                  </Button>
                ) : (
                  ""
                )}

                {allbuttons == true ? (
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => deleteheading2(ticket._id)}
                  >
                    <i className="fas fa-minus"></i>
                  </Button>
                ) : (
                  ""
                )}
              </td>
              {/* <td>
                {" "}
                {ticket.heading2.length == 0 ? (
                  ""
                ) : button2 == false && localStorage.getItem("response") ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      // key = product;

                      setInput2(true);
                      setButton2(true);
                    }}
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleHead();
                      setButton2(false);
                      setInput2(false);
                    }}
                  >
                    Update
                  </Button>
                )}
              </td> */}
            </tr>
            <tr>
              {ticket.body2.map((body2, i) => (
                <td key={i}>
                  {input == false ? (
                    <div className="body"> {body2}</div>
                  ) : (
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder={body2}
                        name={body2.bodyName}
                        value={body2.bodyName}
                        defaultValue={body2}
                        onChange={(e) => testBody2(e, i)}
                      />
                    </InputGroup>
                  )}
                </td>
              ))}
              {/* <td>
                {" "}
                {ticket.body2.length == 0 ? (
                  ""
                ) : button3 == false ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      // key = product;

                      setInput3(true);
                      setButton3(true);
                    }}
                  >
                    <i className="fas fa-edit"></i>
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleBodyyy2();

                      setButton3(false);
                      setInput3(false);
                    }}
                  >
                    Update
                  </Button>
                )}
              </td> */}
            </tr>
            <tr></tr>
            <tr></tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default Ticket;
