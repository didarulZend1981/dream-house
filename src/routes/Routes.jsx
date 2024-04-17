import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Single from "../pages/Single/Single";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToState from "../pages/AddToState/AddToState";
import WishToState from "../pages/WishToState/WishToState";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import UpdateUser from "../pages/UpdateUser/UpdateUser";
import About from "../pages/About/About";



const router = createBrowserRouter([
  {
    path: "/",
    element: 
    
    <Root></Root>,
    errorElement:<NotFound/>,
   
   
    children: [
      {
          path: '/',
          element: <Home></Home>, 
          
      }, 
      {
        path:'/single/:id',
        element: <PrivateRoute>
                    <Single></Single>
               </PrivateRoute>
        
        
      }, 
      {
        path: '/login',
        element: <Login></Login>, 
        
      },
      {
        path: '/register',
        element: <Register></Register>, 
        
      },
      {
        path: '/addToState',
        element: <AddToState></AddToState>, 
        
      },
      {
        path: '/wishToState',
        element: <WishToState></WishToState>, 
        
      },
      {
        path: '/updateUser',
        element: <UpdateUser></UpdateUser>, 
        
      },
      {
        path: '/about',
        element:  
        <PrivateRoute>
                    <About></About>
               </PrivateRoute>
        
      },
      
  ]

  },
]);
export default router;