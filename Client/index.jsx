import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "./Styles/output.css";
import { BrowserRouter } from 'react-router-dom';

// import styles from './Styles/Styles.scss'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App tab='home' />
  </BrowserRouter>
);
