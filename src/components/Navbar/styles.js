const navBarStyles = {
  navbar: {
    display: "flex",
    flexDirection: "row"
  },
  navitems: {
    display: "inline-flex",
    marginRight: 12,
    color: "#e1000",
    listStyle: "none",
    textDecoration: "none",
    "&:last-child": {
      marginLeft: 32
    }
  }
};

export default navBarStyles;
