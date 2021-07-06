import React,{useState,useEffect} from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import GoogleLogin from "react-google-login";
import axios from "axios"
import SERVER from "globals";
import Meta from "Meta/Meta";
import "./user.css"

function User({ location, history }) {

  const [name, setName] = useState("");
 
  const responsesFail = (response) => {
    console.log(response);
  };
  const responsesSuccess = (response) => {
    console.log(response);
    console.log(response.profileObj.name);
    localStorage.setItem("email", JSON.stringify(response.profileObj.email));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // const { data } = axios.post(
    //   "/api/googlelogin",
    //   { tokenId: response.tokenId },
    //   config
    // ).then((response) => {
    //   localStorage.setItem("response", JSON.stringify(data));

    //     console.log(response);
    // });
    axios({
      method: "POST",
      url: `http://localhost:5000/api/googlelogin`,
      data: { tokenId: response.tokenId },
      config,
    }).then((response) => {
      console.log(response);
      localStorage.setItem("response", JSON.stringify(response));
      window.location.reload();
    });
  };

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (isLoggedIn()) {
      history.push(redirect);
    }
  }, [history, redirect]);

  const isLoggedIn = () => {
    return localStorage.getItem("response") ? true : false;
  };

  return (
    <>
    <Meta></Meta>
      <Container fluid>
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
                <Col md="12">
                <div className="google" >  
              <GoogleLogin
                  clientId="807669913381-iekknmo55r3uv11orerdfm3sbi8v3opo.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={responsesSuccess}
                  onFailure={responsesFail}
                  cookiePolicy={"single_host_origin"}
                  
                />
                </div></Col>
            
              </Card.Body>
              <hr></hr>
             
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
