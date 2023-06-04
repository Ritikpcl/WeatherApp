import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState(false)

  if(mode) {
    document.body.style.backgroundColor = "rgba(233, 179, 108, 0.702)";
  }else{
    document.body.style.backgroundColor = "rgb(14, 12, 37)"
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
