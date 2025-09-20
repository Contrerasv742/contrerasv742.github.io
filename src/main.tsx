import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import Projects from './Projects.tsx'
import Contact from './Contact.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <About />
    <Projects />
    <Contact />
  </StrictMode>,
)
