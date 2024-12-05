import React from 'react';

export function Footer() {
  return (
    <footer className="mt-12 text-center text-gray-300">
      <p>© {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
}