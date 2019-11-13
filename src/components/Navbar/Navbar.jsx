import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import InfoTwoTone from "@material-ui/icons/InfoTwoTone";
import navBarStyles from "./styles";

const Navbar = props => {
  const { classes } = props;
  //const auth = useAuth();
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <Link className={classes.navitems} to={"/about"}>
          <InfoTwoTone />
          About
        </Link>
        <Link className={classes.navitems} to={"/contact"}>
          Contact
        </Link>
        {/* {auth.user ? ( */}
        <Fragment>
          {/* <Link to="/account">Account ({auth.user.email})</Link> */}
          <Link className={classes.navitems} to="/account">
            Account
          </Link>
          {/* <Button onClick={() => auth.signout()}>Signout</Button> */}
        </Fragment>
        {/* ) : ( */}
        <Link className={classes.navitems} to="/signin">
          Signin
        </Link>
        {/* )} */}
      </nav>
    </Fragment>
  );
};

export default withStyles(navBarStyles)(Navbar);
