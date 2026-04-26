import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GJSKikajjo from './pages/GJSKikajjo';
import GalleryPage from './pages/GalleryPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GJSKikajjo />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
