import React from "react";

/** Example of component */
const ErrorPage = ({ code, ...otherProps}) =>
    <span className="error-page" {...otherProps}>This is error page, error code: {code}</span>

export default ErrorPage;