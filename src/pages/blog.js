import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { API } from "../config";

export default function Blog({ blogs, setBlogs }) {
  useEffect(() => {
    const fetchBlogPosts = async () => {
      let blogPosts = await (await fetch(API.posts)).json();
      Array.isArray(blogPosts) && setBlogs(blogPosts);
    };
    fetchBlogPosts();
  }, []);
  return (
    <div className="container">
      <Helmet title="Blog posts" />
      <h1>Blog Posts</h1>
      <div className="blogPostsContainer">
        {blogs.map((blog) => {
          return (
            <div key={blog.id} className="blogContainer">
              <Link to={`/blog/${blog.id}`}>
                <h2>{blog.title.slice(0, 50)}...</h2>
              </Link>
              <p>{blog.title.slice(0, 200)}...</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
