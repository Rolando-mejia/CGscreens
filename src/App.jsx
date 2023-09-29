import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect } from 'react';
import i18n from './i18n';
import CheckIn from './pages/CheckIn'
import Gate from './pages/Gate'
import { Home } from './pages/Home';

const App = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    }, 5 * 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/gate/:id' element={<Gate />} />
        <Route path='/checkin/:id' element={<CheckIn />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App
