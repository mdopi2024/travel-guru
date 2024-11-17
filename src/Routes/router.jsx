import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MailLayout from "../MainLayout/MailLayout";

import Home from "../Pages/Home";
import Destination from "../Pages/Destination";
import Blog from "../Pages/Blog";
import Contacks from "../Pages/Contacks";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
  const router = createBrowserRouter([
    {
      path: "/",
      element:<MailLayout></MailLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
        path:'/destination',
        element:<Destination></Destination>
      },
        {
        path:'/blog',
        element:<Blog></Blog>
      },
        {
        path:'/contack',
        element:<Contacks></Contacks>
      },
        {
        path:'/login',
        element:<LogIn></LogIn>
      },
        {
        path:'/register',
        element:<Register></Register>
      },
      
    ]
    },
  ]);

  export default router;