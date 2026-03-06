import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-stone-200">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
