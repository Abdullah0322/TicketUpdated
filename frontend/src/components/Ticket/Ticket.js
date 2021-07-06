import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
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
import "./ticket.css"
const Ticket = ({ ticket }) => {
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
    console.log(response);
  };

  const [button3, setButton3] = useState(false);

  const [headingName, setHeadingName] = useState(ticket.heading);
  const [bodyName, setBodyName] = useState(ticket.body);
  const [bodyName2, setBodyName2] = useState(ticket.body2);
  const [headingName2, setheadingName2] = useState(ticket.heading2);

  const [data, setData] = useState(ticket.heading);





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
    console.log("Handle change => ", e.target.value, "index", i);

    ticket.heading[i] = e.target.value;
  };

  const updateTicke = (e, i) => {
    console.log("index", i);

    console.log("update headingName", headingName, "index", i);

    ticket.heading[i] = headingName;
    axios.post(`https://ticketupdater.herokuapp.com/api/tickets/${ticket._id}/heading`, ticket.heading);

    console.log("ticket.heading: ", ticket.heading);
  };

  const testfunction = (e, i) => {
    e.persist();
    console.log("-----------------", e.target.value, "ine", i);
    handleChange(e, i);
  };

  const testbody = (e, i) => {
    e.persist();
    console.log("-----------------", e.target.value, "ine", i);
    handleBody(e, i);
  };
  const updateBody = (e, i) => {
    ticket.body[i] = bodyName;
    axios.post(`https://ticketupdater.herokuapp.com/api/tickets/${ticket._id}/body`, ticket.body);
    console.log(ticket._id);
  };

  const handleBody = (e, i) => {
    const clonedData = [...bodyName];
    console.log("Handle change => ", e.target.value, "index", i);
    ticket.body[i] = e.target.value;
    console.log("ticket.body[i]: ", ticket.body);
  };
  const testHeading = (e, i) => {
    e.persist();
    console.log("-----------------", e.target.value, "ine", i);
    handleHeading2(e, i);
  };
  const updateHeading2 = (e, i) => {
    ticket.heading2[i] = headingName2;
    axios.post(`https://ticketupdater.herokuapp.com/api/tickets/${ticket._id}/heading2`, ticket.heading2);
    console.log(ticket._id);
  };
  const handleHeading2 = (e, i) => {
    const clonedData = [...headingName2];
    console.log("Handle change => ", e.target.value, "index", i);
    ticket.heading2[i] = e.target.value;
    console.log("ticket.body[i]: ", ticket.body);
  };

  const testBody2 = (e, i) => {
    e.persist();
    console.log("-----------------", e.target.value, "ine", i);
    handleBody2(e, i);
  };
  const updateBody2 = (e, i) => {
    ticket.body2[i] = bodyName2;
    axios.post(`https://ticketupdater.herokuapp.com/api/tickets/${ticket._id}/body2`, ticket.body2);
    console.log(ticket._id);
  };
  const handleBody2 = (e, i) => {
    const clonedData = [...bodyName2];
    console.log("Handle change => ", e.target.value, "index", i);
    ticket.body2[i] = e.target.value;
    console.log("ticket.body[i]: ", ticket.body);
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

const handleDuplicate=()=>{

// const getticket= ticket;
// delete getticket._id
// console.log(getticket)
// console.log(getticket.heading)
// axios.post(`/api/tickets/duplicate`,getticket).then()
// console.log(getticket)
dispatch(duplicateTicket(ticket))
window.location.reload()


}




  return (
    <div>
    
       
      <div className="buttons">
       <Row>
          {localStorage.getItem("response") ? (
            <Button
              variant="danger "
              className="btn-sm"
              onClick={() => deleteHandler(ticket._id)}
            >
              Delete 
            </Button>
          ) : (
            ""
          )}
  {localStorage.getItem("response") ? (
            <Button
              variant="danger"
              className="btn-sm"
              onClick={() => deleteheading(ticket._id)}
            >
              Delete Column in Row 1
            </Button>
          ) : (
            ""
          )}
          {localStorage.getItem("response") ? (
            <Button
              variant="danger"
              className="btn-sm"
              onClick={() => deleteheading2(ticket._id)}
            >
              Delete Column in Row 2
            </Button>
          ) : (
            ""
          )}
        
      <Col>
        
      {localStorage.getItem("response") ? (
            <Button
              variant="primary"
              className="btn-sm"
              onClick={handleDuplicate}
            >
             Duplicate
            </Button>
          ) : (
            ""
          )}
           {localStorage.getItem("response") ? (
            <Button
              variant="primary"
              className="btn-sm"
              onClick={() => submitHand(ticket._id)}
            >
              Add Column in Row 2
            </Button>
          ) : (
            ""
          )}

      {localStorage.getItem("response") ? (
            <Button
              variant="primary"
              className="btn-sm"
              onClick={() => submitHandler(ticket._id)}
            >
              Add Column in Row 1
            </Button>
          ) : (
            ""
          )}
       
         
         
          </Col>
       </Row>
       </div>
     
      <Row>
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
                          value={head.headingName}
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

              <th>
                <div className="edit">
                {button == false && localStorage.getItem("response") ? (
                  <Button
                    variant="primary"
                    className="btn-sm"
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
                    variant="primary"
                    className="btn-sm"
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
               
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {ticket.body.map((body, i) => (
                <td key={i}>
                  {}
                  {input1 == false ? (
                    <div className="body"> {body}</div>
                  ) : (
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder={body}
                        name={body.bodyName}
                        value={body.bodyName}
                        onChange={(e) => testbody(e, i)}
                      />
                    </InputGroup>
                  )}
                </td>
              ))}
              <td>
                {" "}
                {button1 == false && localStorage.getItem("response") ? (
                  <Button
                    variant="primary"
                    className="btn-sm"
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
                    variant="primary"
                    className="btn-sm"
                    onClick={() => {
                     
                      handleBod();
                      setButton1(false);
                      setInput1(false);
                    }}
                  >
                    Update
                  </Button>
                )}
              </td>
            </tr>
            <tr>
              {ticket.heading2.map((head2, i) => (
                <td key={i}>
                  {input2 == false ? (
                    <h6 className="head">
                      <b>{head2}</b>
                    </h6>
                  ) : (
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder={head2}
                        name={head2.bodyName}
                        value={head2.bodyName}
                        onChange={(e) => testHeading(e, i)}
                      />
                    </InputGroup>
                  )}
                </td>
              ))}
              <td>
                {" "}
                {button2 == false && localStorage.getItem("response") ? (
                  <Button
                    variant="primary"
                    className="btn-sm"
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
                    variant="primary"
                    className="btn-sm"
                    onClick={() => {
                     
                      handleHead();
                      setButton2(false);
                      setInput2(false);
                    }}
                  >
                    Update
                  </Button>
                )}
              </td>
            </tr>
            <tr>
              {ticket.body2.map((body2, i) => (
                <td key={i}>
                  {input3 == false ? (
                    <b>{body2}</b>
                  ) : (
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder={body2}
                        name={body2.bodyName}
                        value={body2.bodyName}
                        onChange={(e) => testBody2(e, i)}
                      />
                    </InputGroup>
                  )}
                </td>
              ))}
              <td>
                {" "}
                {button3 == false && localStorage.getItem("response") ? (
                  <Button
                    variant="primary"
                    className="btn-sm"
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
                    variant="primary"
                    className="btn-sm"
                    onClick={() => {
                      handleBodyyy2();
                      
                      setButton3(false);
                      setInput3(false);
                    }}
                  >
                    Update
                  </Button>
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
};

export default Ticket;
