import Register from "./Register/Register.jsx"
import IndexLayout from "../Layouts/IndexLayout/IndexLayout.jsx"
// import MainLayout from "../Layouts/MainLayout/MainLayout.jsx"
import Login from "./Login/Login.jsx"
import Index from "./Index/Index.jsx"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
   
    {
      path: "/",
      element: <IndexLayout />,
      children: [
        { path: '/', element: <Index /> },
        { path: "/signup", element: <Register /> },
        { path: "/signin", element: <Login /> },
      ]
    },
  
    // {
    //   path: '/',
    //   element: <MainLayout />,
    //   children: [
  
    //   ]
    // }
  
  ])