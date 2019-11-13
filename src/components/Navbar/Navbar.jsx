import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { IconContext } from "react-icons";
import {
  MdInfoOutline,
  MdChatBubbleOutline,
  MdPersonOutline
} from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import navBarStyles from "./styles";

const Navbar = props => {
  const { classes } = props;
  //const auth = useAuth();
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <IconContext.Provider
          value={{
            color: "white",
            size: "24px",
            style: { verticalAlign: "middle", marginRight: "4px" }
          }}
        >
          {/* {auth.user ? ( */}
          <Fragment>
            {/* <Link to="/account">Account ({auth.user.email})</Link> */}
            <Link className={classes.navitems} to="/account">
              <MdPersonOutline />
              Account
            </Link>
            {/* <Button onClick={() => auth.signout()}>Signout</Button> */}
          </Fragment>
          {/* ) : ( */}
          <Link className={classes.navitems} to={"/contact"}>
            <MdChatBubbleOutline />
            Chat
          </Link>
          <Link className={classes.navitems} to={"/info"}>
            <MdInfoOutline />
            Info
          </Link>
        </IconContext.Provider>
        <IconContext.Provider
          value={{
            color: "white",
            size: "24px",
            style: { verticalAlign: "middle", marginLeft: "4px" }
          }}
        >
          <Link className={classes.navitems} to="/signin">
            Signin
            <IoIosLogIn />
          </Link>
          {/* )} */}
        </IconContext.Provider>
      </nav>
    </Fragment>
  );
};

export default withStyles(navBarStyles)(Navbar);
