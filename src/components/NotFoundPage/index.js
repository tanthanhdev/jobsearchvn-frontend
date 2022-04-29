import React from "react";
import PropTypes from "prop-types";

NotFoundPage.propTypes = {};

function NotFoundPage(props) {
  return (
    <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
      PAGE NOT FOUND <i style={{ color: "red" }}>404</i>
    </h1>
  );
}

export default NotFoundPage;
