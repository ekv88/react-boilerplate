import React from "react";

/** Example of component */
const CommonComponent = ({ value, children, ...otherProps}) =>
    <span {...otherProps}>{value || children}</span>

export default CommonComponent;