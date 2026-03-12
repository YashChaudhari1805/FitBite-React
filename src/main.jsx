import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home.jsx';
import Auth from './components/Auth.jsx';
import Hero from './components/Hero.jsx';
import Profile from './components/Profile.jsx'
import Recipes from './components/Recipes.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='hero' element={<Hero />} />
      <Route path='profile' element={<Profile />} />
      <Route path='recipes' element={<Recipes />} />
      <Route path='workouts' element={<div>Coming Soon</div>} />
      <Route path='about' element={<div>Coming Soon</div>} />
      <Route path='contact' element={<div>Coming Soon</div>} />
      <Route path='jobs' element={<div>Coming Soon</div>} />
      <Route path='diet' element={<div>Coming Soon</div>} />
    </Route>
    <Route path='/auth' element={<Auth />}></Route>
  </>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
