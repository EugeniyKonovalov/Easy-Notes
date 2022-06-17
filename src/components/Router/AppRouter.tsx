import React from "react";
import { Route, Routes } from "react-router";
import { routes } from "./routes";

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
