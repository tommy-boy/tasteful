const loginStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#9393ff"
  },
  card: {
    position: "relative",
    top: "20px",
    minWidth: 480,
    backgroundColor: "#dfdfff"
  },
  input: {
    display: "inline-flex",
    flex: 1,
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
  forgot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  account: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    top: "40px",
    justifyContent: "center"
  }
};

export default loginStyles;
