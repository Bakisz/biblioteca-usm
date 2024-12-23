import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstNav from './Components/FirstNav';
import SecondNav from './Components/SecondNav';
import Home from './Screens/Home';
import Booking from './Screens/Booking'; 
import LoanBooks from './Screens/LoanBooks'; 
import FirstFooter from './Components/FirstFooter';
import SecondFooter from './Components/SecondFooter';
import ThirdFooter from './Components/ThirdFooter';
import BusquedaLibro from './Screens/BusquedaLibro';
import EnConstruccion from './Screens/EnConstruccion';

function App() {
  return (
    <Router>
      <div className="App">
        <FirstNav />
        <SecondNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reservar" element={<Booking />} />
          <Route path="/Prestamos" element={<LoanBooks />} />
          <Route path="/BusquedaLibro" element={<BusquedaLibro/>} />
          <Route path="/Construccion" element={<EnConstruccion/>} />
        </Routes>
        <FirstFooter />
        <SecondFooter />
        <ThirdFooter />
      </div>
    </Router>
  );
}
//hi
export default App;
