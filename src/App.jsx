/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
//import './App.css';

function App() {

  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main>content</main>
      </div>
    </Router>
  )
}

export default App
