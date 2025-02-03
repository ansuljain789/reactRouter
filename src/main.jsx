import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
      loader={
        githubInfoLoader
      }
      path='github' element={<Github/>}
       />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
 
  </StrictMode>,
)
