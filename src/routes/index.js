import { Navigate } from 'react-router-dom'
import Animation from '../pages/Animation/Animation.jsx'
import Home from '../pages/Home/Home.jsx'
import About from '../pages/About/About.jsx'
import Introduction from '../pages/Introduction/Introduction.jsx'
import Login from '../pages/Login/Login.jsx'
import Detail from '../pages/Detail/Detail.jsx'

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