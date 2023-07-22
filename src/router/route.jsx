import { createBrowserRouter } from "react-router-dom";
import Test from "../Test";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Test/>,
    },
  ]);
  