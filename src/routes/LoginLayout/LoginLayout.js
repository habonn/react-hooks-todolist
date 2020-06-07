import React, { useState } from 'react';

import { Paper, Grid, Typography } from '@material-ui/core';
import Login from "../Login/Login";
import { useStyles } from "./style";
import "antd/dist/antd.css";
import "./style.css";
import Godzilla from "./images/godzilla.png";

export default function SignInSide() {
  const classes = useStyles();

  return (

    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid
       item xs={12} sm={8} md={5} component={Paper} elevation={6} square
      >
        {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
        <Grid item={true} xs={12} container>
          <div className={classes.paper}>
            <img src={Godzilla} alt="godzillaLogin" style={{ width: "50px" }} />
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <br />
            {/* <div style={{
              width: 70, position: "absolute",
              left: "1350px",
              top: "640px",
            }}> */}
            {/* </div> */}
            <Login />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
