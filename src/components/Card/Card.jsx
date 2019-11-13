import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import cardStyles from "./styles";

const CardBox = props => {
  const { classes, children } = props;
  return <div className={classes.cardBox}>{children}</div>;
};

const Image = props => {
  const { classes } = props;
  return (
    <img
      src={"http://placehold.it/400x20&text=slide1"}
      alt="Logo"
      className={classes.picture}
    ></img>
  );
};

const Name = props => {
  const { classes } = props;
  return <div className={classes.name}>{props.name}</div>;
};

const Details = props => {
  const { classes, details } = props;
  return details.map((detail, i) => (
    <li key={i} className={classes.details}>
      {detail}
    </li>
  ));
};

const Star = (props, { selected = false, onClick = f => f }) => {
  const { classes } = props;
  return (
    <div
      className={selected ? classes.starSelected : classes.star}
      onClick={onClick}
    ></div>
  );
};

const Card = props => {
  const { classes, planetOptions } = props;

  return (
    <CardBox classes={classes}>
      <div className={classes.innerBody}>
        <Image image={props.image} classes={classes} />
        <div className={classes.col}>
          <div className={classes.innerBody}>
            <Name name={props.name} classes={classes} />
          </div>
          <div className={classes.innerBody}>
            {[...Array(5)].map((n, i) => (
              <Star
                key={i}
                selected={i < props.starsSelected}
                classes={classes}
                onClick={() => props.change(props.id, i + 1)}
              />
            ))}
          </div>
        </div>
        <div className={classes.col}>
          <div className={classes.innerBody}>
            <Name name={props.name} classes={classes} />
          </div>
          <Details details={props.planetOptions} classes={classes} />
        </div>
      </div>
    </CardBox>
  );
};

Card.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(cardStyles)(Card);
