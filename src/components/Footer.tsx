import React from 'react';

export function Footer() {
  return (
    <footer className="mt-12 text-center text-gray-300 relative">
      <p>© {new Date().getFullYear()} All rights reserved</p>
      <div className="absolute bottom-0 right-4 text-xs text-gray-500">
        ver 1.0.0
      </div>
    </footer>
  );
}