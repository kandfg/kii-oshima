import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/home';
import Photo from './pages/photo';
import Review from './pages/review';
import Bar from './components/Bar';
import PageNotFound from './pages/pagenotfound';


const App = () => (
    <BrowserRouter basename="/kii-oshima">
        <Bar/>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
export default App;
