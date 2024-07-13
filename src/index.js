
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css"

import Home from "./views/Home/Home";
import BlogViews from "./views/BlogViews/BlogViews";


import {createBrowserRouter , RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    
    {
        path: "/",
        element: <Home/>
    }, 
    {
        path: "/blog/:id",
        element: <BlogViews/>
    }
   
])

root.render(<RouterProvider router={router}/>);