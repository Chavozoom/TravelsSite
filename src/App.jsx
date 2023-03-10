import React from 'react';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import NavbarR from './components/NavBar';
import Passengers from './pages/Passengers'
import PassengersData from './pages/PassangersData';
import	'./App.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
        <NavbarR/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/passengers' element={<Passengers />}/>
            <Route path='/data' element={<PassengersData />}/>
        </Routes>
    </div>
  );
}

export default App;
