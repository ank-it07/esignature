// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className='mainwindow'>
      <h1>Welcome to the E-Signature App</h1>
      <Link to="/sign">Go to Signature Pad</Link>
    </div>
  );
};

export default Home;
