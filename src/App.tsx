// Styles
import './App.css'
import { Home } from './components'
import { Cart } from './components/Cart'

// React Components
import { Header } from './components/Header'

// React Router Dom
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header />
        <div className="container">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
