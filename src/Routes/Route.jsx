import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashborad/Cart/Cart";
import Private from "./Private";
import AllUsers from "../Pages/Dashborad/Cart/Allusers";
import AddItems from "../Pages/Dashborad/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashborad/ManageItems";
import UpdateItem from "../Pages/Dashborad/UpdateItem";
  
export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
        path:'/',
        element:<Home></Home>
      },{
        path:'/menu',
        element:<Menu></Menu>
      },{
        path:'/order/:category',
        element:<OrderFood></OrderFood>
      },{
        path:'/login',
        element:<Login></Login>
      },{
        path:'/register',
        element:<Register></Register>
      }
    ]
    },{
      path:'dashboard',
      element:<Private><Dashboard></Dashboard></Private>,
      children:[
        //users routes
        {
          path:'cart',
          element:<Cart></Cart>
        },
        //admin routes
        {
          path:'allUsers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },{
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },{
         path:'manageItems',
         element:<AdminRoute><ManageItems></ManageItems></AdminRoute>

        },{
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);