import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import User from './components/user/User.jsx'
import Home from './components/home/Home.jsx'
import Layout from './Layout.jsx'
import Github from './components/github/Github.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='user/' element={<User/>}>
    <Route path=':userid' element={<User/>}/>
    </Route>
    <Route path='github' element={<Github/>}/>
    <Route path='contact' element={<Contact/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
