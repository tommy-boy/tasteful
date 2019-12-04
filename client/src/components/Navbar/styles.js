const navBarStyles = {
  navbar: {
    display: "flex",
    flexDirection: "row"
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
