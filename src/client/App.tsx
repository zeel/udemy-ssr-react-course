import React from "react";
import { renderRoutes } from "react-router-config";
const App = ({ route }: any) => {
  return <div>Hello !{renderRoutes(route.routes)}</div>;
};
export default App;
