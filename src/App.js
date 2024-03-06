import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.js'; 
import Prediction from './components/Prediction/Prediction.js'

// Import your component pages (Home, Prediction, Blog, etc.)
import Home from './Home';
// import Prediction from './Prediction';
// import Blog from './Blog';

// Consider importing relevant styling libraries if needed

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<Prediction />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* Add more routes for your component pages */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
