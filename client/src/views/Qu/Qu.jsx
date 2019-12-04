import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import Header from "../../components/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import Test from "../../components/InputFocus/InputFocus.jsx";
import quStyles from "./styles";

const Qu = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Header title={"Qu"} />
      {/* <SearchForm /> */}
      <Test focused={props.focused} />
    </div>
  );
};

Qu.defaultProps = {
  focused: false
};

export default withStyles(quStyles)(Qu);
