import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Portfolio from './pages/portfolio/index.js';
import NaoEncontrado from './pages/page404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio/>}></Route>
        <Route path='*' element={<NaoEncontrado/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

