import React from "react";
import { withStyles } from "@material-ui/styles";

import Navbar from "../Navbar/Navbar";
import headerStyles from "./styles";

const Header = props => {
  const { classes, title } = props;
  return (
    <div>
      <header className={classes.header}>
        <Navbar />
      </header>
    </div>
  );
};

export default withStyles(headerStyles)(Header);
