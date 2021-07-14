import React, { useState, useEffect } from "react";

// react-bootstrap components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    color:'black',
  

  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

 
}));
import GoogleLogin from "react-google-login";
import axios from "axios";
import SERVER from "globals";
import Meta from "Meta/Meta";
import "./user.css";

function User({ location, history }) {
  const classes = useStyles();
  const [name, setName] = useState("");

  const responsesFail = (response) => {};
  const responsesSuccess = (response) => {
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
      localStorage.setItem("response", JSON.stringify(response));
      window.location.reload();
    });
  };

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/admin/dashboard";
  const redirected = location.search ? location.search.split("=")[1] : "/login";
  useEffect(() => {
    if (isLoggedIn()) {
      history.push(redirect);
    } else {
      history.push(redirected);
    }
  }, [history, redirect, redirected]);

  const isLoggedIn = () => {
    return localStorage.getItem("response") ? true : false;
  };

  return (
    <>
      <Meta></Meta>
      <div className={classes.my}>      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          
          <div className="google" >  
              <GoogleLogin
                  clientId="807669913381-iekknmo55r3uv11orerdfm3sbi8v3opo.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={responsesSuccess}
                  onFailure={responsesFail}
                  cookiePolicy={"single_host_origin"}
                  
                />
                </div>
        </div>
      </Grid>
    </Grid>
    </div>

    </>
  );
}

export default User;
