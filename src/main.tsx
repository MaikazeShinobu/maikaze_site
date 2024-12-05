import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const prepare = async () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Failed to find the root element');
  }

  const root = createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

prepare().catch((error) => {
  console.error('Application failed to start:', error);
});