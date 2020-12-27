import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { API } from "../config";
export default function BlogDetail({ match }) {
  const [state, setState] = useState({ loading: true, detail: {} });
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const blogDetail = await (await fetch(`${API.posts}/${match.params.blogId}`)).json();
        setState({ loading: false, detail: blogDetail });
      } catch (e) {
        setState({ loading: false, detail: { error: e.message } });
      }
    };
    fetchDetails();
  }, []);
  console.log(state);
  return (
    <div className="container">
      <Helmet title={state.detail?.title} />
      <h1>{state.loading ? "Loading..." : `${state.detail?.title}`}</h1>
      {state.detail?.error ? <p>{state.detail.error}</p> : null}
      <div>
        <p>{state.detail?.body}</p>
      </div>
    </div>
  );
}
