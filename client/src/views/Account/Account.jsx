import React from "react";
import { withStyles } from "@material-ui/styles";
import Header from "../../components/Header/Header";
import BasicForm from "../../components/BasicForm/BasicForm";
import accountStyles from "./styles";

const Account = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Header title={"Account"} />
      <BasicForm />
    </div>
  );
};

export default withStyles(accountStyles)(Account);
