import React, { Component } from "react";
import { useTasteful } from "../../App";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

import Header from "../../components/Header/Header";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import registrationStyles from "./styles";

const Registration = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Header title={"Registration"} />
      <RegistrationForm />
    </div>
  );
};

export default withStyles(registrationStyles)(Registration);
