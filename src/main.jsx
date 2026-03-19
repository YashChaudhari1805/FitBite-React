import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom'
import Home from './components/Home.jsx'
import Auth from './components/Auth.jsx'
import Hero from './components/Hero.jsx'
import Profile from './components/Profile.jsx'
import Recipes from './components/Recipes.jsx'
import Workout from './components/Workout.jsx'
import Diet from './components/Diet.jsx'
import About from './components/About.jsx'
import NotFound from './components/NotFound.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}>
                <Route path="" element={<Home />} />
                <Route path="hero" element={<Hero />} />
                <Route path="profile" element={<Profile />} />
                <Route path="recipes" element={<Recipes />} />
                <Route path="workouts" element={<Workout />} />
                <Route path="diet" element={<Diet />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
        </>
    )
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
)
