import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import inputStyles from "./styles";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      value: props.value || "",
      error: props.error || ""
    };
  }

  _onChange = e => {
    const { value } = e.target;
    this.setState({ value: value });
  };

  render() {
    const { classes, name, placeholder } = this.props;
    const { id, value, error } = this.state;
    return (
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        className={classes.field}
        onChange={this._onChange}
      />
    );
  }
}

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(inputStyles)(Input);
