import React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from '../client/components/App.jsx';

// // Styling
// import _styles from './scss/application.scss';

const root = createRoot(document.querySelector('#root'));
root.render(<App />);