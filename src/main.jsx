import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Userprofile from './shared components/Userprofile.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/userprofile",
        element: <Userprofile></Userprofile>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />,
     </AuthProvider>
  </StrictMode>,
)
