import React from 'react'; 
import './App.css';
import './css/all.min.css';
import './css/bootstrap.min.css';
import './css/tooplate-style.css'; 

import Menu from './components/Menu' 
import Footer from './components/Footer'
import Main from './components/Main'

import { BrowserRouter as Router } from 'react-router-dom'; 
  

function App() {
  return (
    <div className="App">
         
        <Router>
            <Menu/>
            <Main />
            <Footer /> 
        </Router>
  

    
    </div>
  );
}

export default App;
