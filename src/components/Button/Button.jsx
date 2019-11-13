import React from "react";
import { withStyles } from "@material-ui/styles";

import buttonStyles from "./styles";

const Button = props => {
  const { children, classes } = props;
  return <button className={classes.btnPrimary}>{children}</button>;
};

export default withStyles(buttonStyles)(Button);
