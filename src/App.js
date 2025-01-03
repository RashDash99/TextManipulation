import "./App.css";
import { Navbar } from "./components/Navbar";
import TextUtils from "./components/TextUtils";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.background = 'white';
    } else {
      setMode('dark');
      document.body.style.background = 'grey';
    }
  };

  return (
    <>
      
        <Navbar mode={mode} toggleMode={toggleMode}/> 
        <div className="container my-3">
          
            <TextUtils heading="Enter Text to Analyze" mode={mode} />
        </div>
      
    </>
  );
}

export default App;
