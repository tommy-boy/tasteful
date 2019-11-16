import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import axios from "axios";

import tableStyles from "./styles";

const renderTableHeader = () => {
  return (
    <Fragment>
      <th>Titles</th>
      <th>Author</th>
      <th>URL</th>
    </Fragment>
  );
};

const renderTableData = (item, key) => {
  return (
    <tr key={key}>
      <td>{item.title}</td>
      <td>{item.author}</td>
      <td>{item.url}</td>
    </tr>
  );
};

const Table = props => {
  const { classes, title } = props;
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "http://hn.algolia.com/api/v1/search?query=react"
      );
      setData(results.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 id="title">{title}</h1>
      <table id="users">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {data.hits.map((item, index) => renderTableData(item, index))}
        </tbody>
      </table>
    </div>
  );
};

export default withStyles(tableStyles)(Table);
