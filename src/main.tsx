import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StenoKeyboard from './StenoKeyboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StenoKeyboard/>
  </StrictMode>,
)
