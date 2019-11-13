const tableStyles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
    lineHeight: 25
  },
  th: {
    backgroundColor: "#eee",
    textAlign: "center"
  },
  td: {
    textAlign: "center",
    "&:firstChild": {
      textAlign: "left"
    }
  },
  input: {
    minWidth: 300,
    border: "1px solid #999",
    borderRadius: 2,
    lineHeight: 25
  }
};

export default tableStyles;
