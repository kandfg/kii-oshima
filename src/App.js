import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Photo from './pages/photo';
import Review from './pages/review';
import Bar from './components/Bar';

const App = () => (
    <BrowserRouter basename="/kii-oshima">
        <Bar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/photo" element={<Photo />} />
        </Routes>
    </BrowserRouter>
  );
export default App;
