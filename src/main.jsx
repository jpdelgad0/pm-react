import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Vehicle from './pages/Vehicle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename='/pm-react'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle/:id" element={<Vehicle />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
