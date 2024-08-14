import {  createBrowserRouter,  RouterProvider  } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Plans from "../plan/Plans";
import About from "../components/About"
import Blog from '../components/Blog'
import SingleData from "../plan/SingleData";
import DashBoardLO from "../dashboard/DashBoardLO";
import DashBoard from "../dashboard/DashBoard";
import UploadWork from "../dashboard/UploadWork";
import ManageWork from "../dashboard/ManageWork";
import EditWork from "../dashboard/EditWork";
import SignUp from "../components/SignUp";
import Single from "../components/Single";
import Login from "../components/Login";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element:<Home/>
        },
        {
            path:'/plan',
            element: <Plans/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
           path: '/work/:id',
           element: <SingleData/>,
           loader: ({params}) => fetch(`http://localhost:5000/work/${params.id}`)
        }
      ]
    },
    {
      path: '/admin/dashboard',
      element: <DashBoardLO/>,
      children: [
        {
          path: '/admin/dashboard',
          element:<PrivateRoute><DashBoard/></PrivateRoute>
        },
        {
          path: '/admin/dashboard/upload',
          element: <UploadWork/>
        },
        {
          path: '/admin/dashboard/manage',
          element: <ManageWork/>
        },
        {
          path: '/admin/dashboard/edit-works/:id',
          element: <EditWork/>,
          loader: ({params}) => fetch(`http://localhost:5000/work/${params.id}`)
        }
      ]
    },{
      path: "/sign-up",
      element: <Single/>
    },{
      path:"login",
      element: <Login/>
    }
    
  ]);

  export default router;

 