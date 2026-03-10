import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-stone-300">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
