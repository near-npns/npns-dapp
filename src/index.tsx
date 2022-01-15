import App from '@/layout/App'
import { Buffer } from 'buffer'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'
window.Buffer = Buffer

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
