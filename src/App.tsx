import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { Projects } from './pages/Projects';
import { MusicAlbums } from './pages/MusicAlbums';

const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

export default function App() {
  return (
    <HashRouter future={router.future}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/music-albums" element={<MusicAlbums />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}