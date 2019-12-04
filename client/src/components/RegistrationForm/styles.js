const registrationFormStyles = {
  wrapper: {
    display: "grid",
    margin: "0 auto",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: 10,
    gridAutoRows: "minmax(100px, 200px)",
    alignItems: "start"
  },
  boxOne: {
    gridColumn: 1,
    gridRow: 1,
    marginRight: 22
  },
  boxTwo: {
    gridColumn: 2,
    gridRow: "1 / 3",
    marginRight: 22
  },
  boxThree: {
    gridColumn: 3,
    gridRow: "1 / 5"
  },
  boxFour: {
    gridColumn: 1,
    gridRow: 2
  },
  boxFive: {
    gridColumn: 2,
    gridRow: 2
  },
  boxSix: {
    gridColumn: 3,
    gridRow: 2
  },
  list: {
    listStyle: "none"
  },
  input: {
    display: "inline-flex",
    width: 200,
    height: 18,
    margin: 8,
    padding: 8,
    border: "none",
    borderRadius: 4,
    position: "relative",
    fontFamily: "'Gotham SSm A', 'Gotham SSm B', sans-serif",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "normal",
    backgroundColor: "rgba(255,255,255,0.8)",
    transition: "0.3s all",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)"
    }
  },
  btnSecondary: {
    display: "inline-flex",
    color: "#000",
    backgroundColor: "#9e9e9e",
    border: "none",
    borderRadius: 5,
    padding: 8,
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#829ceb"
    },
    margin: props => props.margin
  }
};

export default registrationFormStyles;
