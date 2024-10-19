import React from 'react'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("No root element found. Please check your HTML.");
} else {
  createRoot(rootElement).render(
    <React.StrictMode>
      <App />
      </React.StrictMode>
  );
}
