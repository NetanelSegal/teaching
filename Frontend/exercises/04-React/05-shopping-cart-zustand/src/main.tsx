import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx' // Change to './solution.tsx' to run the instructor solution

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
