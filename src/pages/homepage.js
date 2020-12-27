import React from "react";
import { Helmet } from "react-helmet";
import logo from "../logo.svg";

export default function Homepage() {
  return (
    <div className="container">
      <Helmet title="Welcome to Express rendering" />
      <img src={logo} className="App-logo" alt="logo" />
      <p>React app served with express with dynamic metatags with react</p>
      <p>How it works:</p>
      <p>
        Visit a page (eg <a href="/blog/1">/blog/1/</a>), and reload to see dynamically added tags by express with View
        Page Source
      </p>
    </div>
  );
}
