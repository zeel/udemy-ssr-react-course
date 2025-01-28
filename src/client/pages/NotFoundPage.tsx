import React from "react";

const NotFoundPage = ({
  staticContext = {},
}: {
  staticContext: { isNotFound?: boolean };
}) => {
  staticContext.isNotFound = true;
  return <h1>Oops, route not found</h1>;
};

export default {
  component: NotFoundPage,
};
