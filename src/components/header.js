import React from "react";

export default ({ headerText = "No Header", ...props }) => (
  <h1>{headerText}</h1>
);
