import React, { Component, Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useTasteful } from "../../App";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

import TextField from "../TextField/TextField";
import Button from "../Button/Button";

import registrationFormStyles from "./styles";

const RegistrationForm = props => {
  const [tasteful, updateTasteful] = useTasteful();
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("react");

  //const [reset, setReset] = useInput("");
  const { classes } = props;

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        `http://hn.algolia.com/api/v1/search?query=${search}`
      );
      setData(results.data);
    };
    fetchData();
    console.log("r: ", data);
  }, [search]);

  //fetch example

  // const [hasError, setErrors] = useState(false);
  //   const [planets, setPlanets] = useState({});

  // useEffect(() =>
  //     fetch("https://swapi.co/api/planets/4/")
  //       .then(res => res.json())
  //       .then(res => this.setState({ planets: res }))
  //       .catch(() => this.setState({ hasErrors: true }))
  //   );

  // to -

  // const [hasError, setErrors] = useState(false);
  // const [planets, setPlanets] = useState({});

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("https://swapi.co/api/planets/4/");
  //     res
  //       .json()
  //       .then(res => setPlanets(res))
  //       .catch(err => setErrors(err));
  //   }

  //   fetchData();
  // });

  //add empty arrary as second argument (a dependency, if changes then runs again)
  // useEffect(() => {
  //   fetchData()
  // }, [])

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
    <Fragment>
      <div className={classes.wrapper}>
        <div className={classes.boxOne}>
          <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
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
            {data.hits.map(item => (
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
      </div>
    </Fragment>
  );
};

RegistrationForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(registrationFormStyles)(RegistrationForm);
