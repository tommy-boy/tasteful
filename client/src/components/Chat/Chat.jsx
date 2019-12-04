import React from "react";
import Header from "../../components/Header/Header";

const Chat = props => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Header title={"Account"} />
    </div>
  );
};

export default Chat;
