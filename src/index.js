import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//kisi id ka naam root hoga html file me usi ko ham render(dekh rahe hai) kar rahe hai. 
const root = ReactDOM.createRoot(document.getElementById('root'));
//render ka matlab dekhao
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
