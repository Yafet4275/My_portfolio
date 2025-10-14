import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';
import emailjs from '@emailjs/browser';


emailjs.init("LucRYRVJY9RNO9T5g");
ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);