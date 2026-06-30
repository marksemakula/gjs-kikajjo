import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GJSKikajjo from './pages/GJSKikajjo';
import GalleryPage from './pages/GalleryPage';
import ApplyPage from './pages/admissions/ApplyPage';
import FeesPage from './pages/admissions/FeesPage';
import DocumentsPage from './pages/admissions/DocumentsPage';
import PrincipalMessage from './pages/PrincipalMessage';
import SchoolProfile from './pages/SchoolProfile';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GJSKikajjo />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
        <Route path="/about/school-profile" element={<SchoolProfile />} />
        <Route path="/admissions/apply" element={<ApplyPage />} />
        <Route path="/admissions/fees" element={<FeesPage />} />
        <Route path="/admissions/documents" element={<DocumentsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
