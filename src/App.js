import React, { useState } from "react";
import logo from "./logo.svg";
import { Link, Switch, BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blogdetail";
function App() {
  const [blogs, setBlogs] = useState([]);
  const [blogDetail, setBlogDetail] = useState({});
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav className="container">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About Page</Link>
            </div>
            <div>
              <Link to="/blog/">Blog Page</Link>
            </div>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={HomePage} />

          <Route path="/about" component={AboutPage} />

          <Route path="/blog/:blogId" component={BlogDetail} />
          <Route path="/blog" e component={() => <Blog {...{ blogs, setBlogs }} />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
