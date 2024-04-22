import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Portfolio from './pages/portfolio/index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

