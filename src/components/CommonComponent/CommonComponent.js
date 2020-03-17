import React from "react";

/** Example of component */
const CommonComponent = ({ value, ...otherProps}) =>
    <span {...otherProps}>{value}</span>

export default CommonComponent;