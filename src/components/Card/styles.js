const cardStyles = {
  cardBox: {
    display: "flex",
    padding: 0,
    margin: 0,
    height: "100%",
    backgroundColor: "#ECF0F1",
    justifyContent: "space-between"
  },
  col: {
    flex: "1",
    flexDirection: "column",
    flexGrow: 0,
    display: "inline-flex",
    justifyContent: "space-between",
    background: "tomato",
    margin: 12,
    padding: 5,
    width: 200,
    height: 150,
    marginTop: 10,
    lineHeight: 150,
    color: "#fff",
    fontWeight: 700,
    fontSize: "3em",
    textAlign: "center"
  },
  name: {
    color: "blue"
  },
  starSelected: {
    color: "orange"
  },
  star: {
    color: "#fff"
  },
  details: {
    display: "flex",
    listStyle: "none",
    alignItems: "center",
    height: "20px",
    color: "gray",
    fontSize: "18px",
    fontWeight: "700",
    outline: "none"
  },
  innerBody: {
    width: "100%"
  },
  picture: {
    width: 400,
    height: 20,
    margin: 12
  }
};

export default cardStyles;
