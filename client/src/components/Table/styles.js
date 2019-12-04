const tableStyles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
    lineHeight: 25
  },
  th: {
    padding: "12px 0",
    textAlign: "center",
    backgroundColor: "#eee",
    textAlign: "center"
  },
  td: {
    border: "1px solid #ddd",
    padding: 8,
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
