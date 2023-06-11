import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainHome from './Component/MainHome';
import Home from './Component/Home';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* <RouterProvider router={router} /> */}
    <App></App>
  </React.StrictMode>,
)
