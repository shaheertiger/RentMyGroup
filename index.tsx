import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { isPseoPath, loadPseoPage, setPreloadedPseoPage } from './pseo/client.ts';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const render = () => {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Prerendered pSEO pages: load the page chunk first so the static HTML is
// swapped for identical React output instead of a loading spinner.
const path = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
if (isPseoPath(path)) {
  loadPseoPage().then((m) => setPreloadedPseoPage(m.PseoPage)).catch(() => {}).finally(render);
} else {
  render();
}
