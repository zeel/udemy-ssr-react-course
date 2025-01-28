import React from "react";
import Helmet from "react-helmet";
const Home = () => {
  return (
    <div className="text-center">
      <Helmet>
        <title>Home Page</title>
        <meta property="og:title" content="Home Page" />
      </Helmet>
      <h3>Welcome</h3>
      <p>Checkout these features</p>
    </div>
  );
};

export default {
  component: Home,
};
