import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
