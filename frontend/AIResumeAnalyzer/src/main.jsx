import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
if (window.location.hash) {
  window.history.replaceState(null, "", window.location.pathname + window.location.search);
}
window.scrollTo({ top: 0, left: 0, behavior: "instant" });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
