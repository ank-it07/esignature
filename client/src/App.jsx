import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignaturePad from './components/SignaturePad';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Add an element or component for the root route */}
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<SignaturePad />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
