const textFieldStyles = {
  field: {
    display: "flex",
    width: "100%",
    boxSizing: "border-box",
    margin: "10px 0",
    padding: 16,
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
  }
};

export default textFieldStyles;
