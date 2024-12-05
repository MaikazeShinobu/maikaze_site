import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { Projects } from './pages/Projects';
import { MusicAlbums } from './pages/MusicAlbums';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/music-albums" element={<MusicAlbums />} />
      </Routes>
    </HashRouter>
  );
}