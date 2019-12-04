import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import textFieldStyles from "./styles";

const TextField = props => {
  const [value, setValue] = useState("");
  const { classes, name, placeholder } = props;

  return (
    <input
      type="text"
      name={name}
      value={value}
      placeholder={placeholder}
      className={classes.field}
      onChange={e => setValue(e.target.value)}
      required
    />
  );
};

TextField.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string
};

export default withStyles(textFieldStyles)(TextField);
