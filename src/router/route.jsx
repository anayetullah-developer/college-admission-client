import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyColleges from "../pages/MyColleges/MyColleges";
import Footer from "../pages/Footer/Footer";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/colleges",
            element: <Colleges/>
        },
        {
            path: "/admission",
            element: <Admission/>
        },
        {
            path: "/my-colleges",
            element: <MyColleges/>
        },
        
        {
            path: "/footer",
            element: <Footer/>
        },


      ]
    },
  ]);
  