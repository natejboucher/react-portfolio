import React  from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className='body'>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/react-portfolio' element={<Home/>} />
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/react-portfolio/about' element={<About/>} />
            <Route exact path='/react-portfolio/projects' element={<><About /><Projects/></>} />
            <Route exact path='/react-portfolio/contact' element={<Contact/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
