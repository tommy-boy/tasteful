import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
//import { AuthContext } from "../App";
import Header from "../../components/Header";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography
} from "@material-ui/core";
import loginStyles from "./styles";

const Login = props => {
  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  };

  const { classes } = props;
  const [data, setData] = React.useState(initialState);
  const [loading, setLoading] = React.useState(false);
  return (
    <Fragment>
      <Header title={"Login"} />
      <Container maxWidth={false} className={classes.container}>
        <Grid
          container
          xs={12}
          justify="center"
          direction="column"
          alignItems="center"
        >
          <Card className={classes.card}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Login
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  type="email"
                  name="email"
                  placeholder="email"
                  className={classes.input}
                />
                <TextField
                  type="text"
                  name="password"
                  placeholder={"password"}
                  className={classes.input}
                />
                <Button type="submit" value="Submit" margin={"0 auto"}>
                  Login
                </Button>
              </form>
              <Typography variant="body2" className={classes.forgot}>
                Forgot your password?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          container
          xs={12}
          justify="center"
          direction="column"
          alignItems="center"
        >
          <Typography gutterBottom variant="body2" className={classes.account}>
            Don't have an account? Sign up
          </Typography>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default withStyles(loginStyles)(Login);
