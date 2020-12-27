import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/about">About Page</a>
          </div>
          <div>
            <a href="/blog/">Blog Page</a>
            <ul>
              <div>
                <a href="/blog/1">Blog Post 1</a>
              </div>
              <div>
                <a href="/blog/2">Blog Post 2</a>
              </div>
            </ul>
          </div>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>React app served with express with dynamic metatags with react</p>
        <p>Can be configured with react router too</p>
      </header>
    </div>
  );
}

export default App;
