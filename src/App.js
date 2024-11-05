import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstNav from './Components/FirstNav';
import SecondNav from './Components/SecondNav';
import Home from './Screens/Home';
import Booking from './Screens/Booking'; // Importa el archivo de la reserva
import FirstFooter from './Components/FirstFooter';
import SecondFooter from './Components/SecondFooter';
import ThirdFooter from './Components/ThirdFooter';

function App() {
  return (
    <Router>
      <div className="App">
        <FirstNav />
        <SecondNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Reservar" element={<Booking />} />
        </Routes>
        <FirstFooter />
        <SecondFooter />
        <ThirdFooter />
      </div>
    </Router>
  );
}

export default App;
