import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import TextField from "../TextField/TextField";
import Input from "../Input/Input";
import Button from "../Button/Button";

import registrationFormStyles from "./styles";

class RegistrationForm extends Component {
  async _handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    for (var pair of data) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // await fetch("https://api.github.com/gists", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   },
    //   body: data
    // });

    const config = {
      headers: { "content-type": "multipart/form-data" }
    };

    axios
      .post("http://something.com/", data, config)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <AppProvider>
        <div className={classes.wrapper}>
          <form onSubmit={this._handleSubmit}>
            <div className={classes.boxOne}>
              <Input name={"firstName"} placeholder={"First name"} />
            </div>
            <div className={classes.boxTwo}>
              <TextField name={"lastName"} placeholder={"Last name"} />
            </div>
            <div className={classes.boxThree}>
              <TextField name={"nickName"} placeholder={"Nick name"} />
            </div>
            <div className={classes.boxThree}>
              <Input name={"email"} placeholder={"Email"} />
            </div>
            <Button type="submit" value="Submit">
              Submit
            </Button>
          </form>
          <AppContext.Consumer>{context => context.number}</AppContext.Consumer>
        </div>
      </AppProvider>
    );
  }
}

export default withStyles(registrationFormStyles)(RegistrationForm);
