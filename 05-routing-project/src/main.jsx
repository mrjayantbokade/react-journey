import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, Outlet, createBrowserRouter, Route, createRoutesFromElements} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import {User} from "./components/User/User.jsx";
import {Github, githubInfoLoader} from "./components/Github/Github.jsx";


//there are two ways to do routing one is with array
// another is with function ie createRoutesFromElements


// const router = createBrowserRouter([
//     {
//         path:"/",
//         element: <Layout/>,
//         children:[
//             {
//                 path:"",
//                 element: <Home/>,
//             },
//             {
//                 path:"contact",
//                 element: <Contact/>,
//             },
//             {
//                 path:"about",
//                 element: <About/>,
//             }
//         ]
//     }
// ])


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="user/:username" element={<User />}/>
            <Route
                loader={githubInfoLoader}
                path="github"
                element={<Github />}
            />
        </Route>
    )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={ router }/>
  </React.StrictMode>,
)
