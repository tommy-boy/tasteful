const buttonStyles = props => ({
  btnPrimary: {
    display: "block",
    color: "#fff",
    backgroundColor: "#4169E1",
    border: "none",
    borderRadius: 5,
    padding: 8,
    minWidth: 68,
    "&:hover": {
      backgroundColor: "#829ceb"
    },
    margin: props => props.margin
  }
});

export default buttonStyles;
