const navBarStyles = {
  navbarLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexGrow: 1
  },
  navbarRight: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    flexGrow: 1
  },
  navitemFirst: {
    display: "inline-flex",
    flexGrow: 1,
    justifyContent: "flex-start",
    marginLeft: 16,
    color: "white",
    listStyle: "none",
    textDecoration: "none",
    "&:hover": {
      color: "blue"
    }
  },
  navitems: {
    display: "inline-flex",
    marginRight: 16,
    color: "white",
    listStyle: "none",
    textDecoration: "none",
    "&:hover": {
      color: "blue"
    },
    "&:last-child": {
      marginLeft: 22,
      marginRight: 0
    }
  },
  navicon: {
    marginRight: 4
  }
};

export default navBarStyles;
