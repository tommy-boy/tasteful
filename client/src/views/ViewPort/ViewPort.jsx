import React, { Component } from "react";
import Card from "../../components/Card/Card";
import { withStyles } from "@material-ui/styles";

import viewStyles from "./styles";

class ViewPort extends Component {
  state = {
    isLoading: true,
    hasErrors: false,
    planets: {}
  };

  async componentDidMount() {
    await fetch("https://swapi.co/api/planets/4/")
      .then(res => res.json())
      .then(data => this.setState({ planets: data, isLoading: false }))
      .catch(() => this.setState({ hasErros: true }));
  }

  render() {
    const { classes } = this.props;
    const { planets, isLoading } = this.state;

    // for (let key in planets) {
    //   let value = planets[key];
    //   console.log(key, value);
    // }

    const PlanetOptions = Object.entries(planets).map(([key, value]) => (
      <li key={key}>
        {key}: {value}
      </li>
    ));

    return <div>{!isLoading && <Card planetOptions={PlanetOptions} />}</div>;
  }
}

export default withStyles(viewStyles)(ViewPort);
