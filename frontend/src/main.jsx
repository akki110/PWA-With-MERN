import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.jsx';
import './index.css';

// Register service worker (PWA)
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New version available. Refresh now?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("✅ App is ready to work offline");
  }
});

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then(registration => {
//         console.log('✅ Service Worker registered with scope:', registration.scope);
//       })
//       .catch(error => {
//         console.error('❌ Service Worker registration failed:', error);
//       });
//   });
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
