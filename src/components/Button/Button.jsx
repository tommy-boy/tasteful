import React, { memo } from "react";
import { withStyles } from "@material-ui/styles";

import buttonStyles from "./styles";

const Button = memo(props => {
  const { children, classes, callback } = props;
  return (
    <button className={classes.btnPrimary} onClick={callback}>
      {children}
    </button>
  );
});

export default withStyles(buttonStyles)(Button);
