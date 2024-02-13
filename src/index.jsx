import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootContainer = document.querySelector('#root');

if (rootContainer === null) throw new Error('Root container doesn\'t exists');

const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
