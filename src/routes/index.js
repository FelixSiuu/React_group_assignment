import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import Animation from '../pages/Animation/Animation.jsx'
import Home from '../pages/Home/Home.jsx'
import About from '../pages/About/About.jsx'
import Login from '../pages/Login/Login.jsx'
// lazy load
const Introduction = lazy(()=> import('../pages/Introduction/Introduction.jsx'))
const Detail = lazy(()=> import('../pages/Detail/Detail.jsx'))

const routes = [
  { path: '/animation', element: <Animation/> },
  { path: '/' , element: <Navigate to="/animation"/>},
  { path: '/home', element: <Home/> },
  { path: '/about', element: <About/> },
  { path: '/introduction', element: <Introduction/> },
  { path: '/login', element: <Login/> },
  { path: '/detail', element: <Detail/> },
]

export default routes