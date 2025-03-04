import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "animate.css";
import "aos/dist/aos.css"; 

import AOS from "aos";
AOS.init({
  duration: 1000, // Duration of the animation in milliseconds
  once: true, // Animation happens only once
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
