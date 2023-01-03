import React from "react";

import { Route, Routes } from "react-router-dom";

// Pages
import { Home, Login, NotFound } from "../pages";

const GlobalRoutes = () => {
  const routes: { path: string; Component: () => JSX.Element }[] = [
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/login",
      Component: Login,
    },
    {
      path: "*",
      Component: NotFound,
    },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route path={route.path} element={<route.Component />} key={index} />
      ))}
    </Routes>
  );
};

export default GlobalRoutes;
