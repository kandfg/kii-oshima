import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Photo from './pages/photo';
import Review from './pages/review';
import reportWebVitals from './reportWebVitals';
import Bar from './components/Bar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/kii-oshima">
    <Bar/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/review" element={<Review />} />
      <Route path="/photo" element={<Photo />} />
    </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
