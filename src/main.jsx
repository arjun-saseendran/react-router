import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import User from './components/user/User.jsx'
import Home from './components/home/Home.jsx'
import Layout from './Layout.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/about/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='user/' element={<User/>}>
    <Route path=':userid' element={<User/>}/>

    </Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
