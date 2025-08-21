import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
