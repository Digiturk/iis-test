import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link1 from './link1';
import Link2 from './link2';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/path">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="link-1" element={<Link1 />} />
        <Route path="link-2" element={<Link2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
