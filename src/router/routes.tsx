import type { RouteObject } from "react-router";
import Home from "../pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export default routes;
