import React from 'react';
import { hydrateRoot, render } from 'react-dom';
import App from './App';


const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrateRoot(<StrictApp />, rootElement);
} else {
  render(<StrictApp />, rootElement);
}