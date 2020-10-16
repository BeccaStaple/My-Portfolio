import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./Pages/Home"
import NavBar from "./PageComponents/NavBar"
import Header from "./PageComponents/Header"
import Footer from "./PageComponents/Footer"



function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Header />
        
        <Footer />
      </Router>

    </div>
  );
}

export default App;
