import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /** React strict mode renders the App twice and may lead to calling the API twice as well. This happens only in dev mode and is done purpsosely
   * by React to identify unsafe lifecycle, deprecated findDOMNode usage, unexpected side effects etc.
   */
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
