import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import searchStyles from "./styles";
import Button from "../Button/Button";

const getRecipes = e => {
  e.preventDefault();
  console.log("getRecipes");
};

const SearchForm = props => {
  const [value, setValue] = useState("");
  return (
    <form>
      <input
        type="text"
        name="recipeName"
        onChange={e => setValue(e.target.value)}
      />
      <Button callback={getRecipes}>Search</Button>
    </form>
  );
};

export default withStyles(searchStyles)(SearchForm);
