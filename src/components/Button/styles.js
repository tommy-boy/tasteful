const buttonStyles = props => ({
  btnPrimary: {
    display: "flex",
    color: "#fff",
    backgroundColor: "#0000e7",
    border: 0,
    borderColor: "transparent",
    borderRadius: 5,
    padding: "12px 18px",
    outline: "none",
    margin: props => props.margin,
    "&:hover": {
      backgroundColor: "#0f0fff"
    }
  }
});

export default buttonStyles;
