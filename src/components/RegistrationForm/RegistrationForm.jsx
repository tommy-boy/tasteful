import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
//import { useRatings } from "../../App";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import Table from "../Table/Table";

import registrationFormStyles from "./styles";

const RegistrationForm = props => {
  const { classes } = props;
  //const [ratings, updateRatings] = useRatings({ feed: [] }, initialState);
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("react");

  //const [reset, setReset] = useInput("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(result => setData(result.data));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://yummly2.p.rapidapi.com/feeds/search?q=babyback%20ribs&start=0&maxResult=18",
        {
          headers: {
            "x-rapidapi-host": "yummly2.p.rapidapi.com",
            "x-rapidapi-key":
              "3559f0bd4emsh3f2ed9198336768p15f47ajsnaa7ae631bb03"
          }
        }
      );
      setData(results.data);
      console.log("hey: ", results.data);
    };
    fetchData();
  }, [search]);

  // const [hasError, setErrors] = useState(false);
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("http://hn.algolia.com/api/v1/search?query=react");
  //     res
  //       .json()
  //       .then(res => setData(res))
  //       .catch(err => setErrors(err));
  //   }

  //   fetchData();
  // });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    for (var pair of data) {
      console.log(pair[0] + ": " + pair[1]);
    }
    fetch("/api/form-submit-url", {
      method: "POST",
      body: data
    });
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.boxOne}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className={classes.input}
        />
        <button
          className={classes.btnSecondary}
          type="button"
          onClick={() => setSearch(query)}
        >
          Search
        </button>
        <ul className={classes.list}>
          {data.feed.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.boxTwo}>
        <form onSubmit={handleSubmit}>
          <TextField name={"firstName"} placeholder={"firstname"} />
          <TextField name={"lastName"} placeholder={"lastname"} />
          <TextField name={"email"} placeholder={"email"} />
          <TextField name={"nickName"} placeholder={"nickname"} />
          <Button type="submit" value="Submit" margin={"0 auto"}>
            Register
          </Button>
        </form>
      </div>
      <div className={classes.boxThree}>
        <Table title="Hits" />
      </div>
    </div>
  );
};

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string
};

export default withStyles(registrationFormStyles)(RegistrationForm);
