import App from '@/layout/App'
import { Buffer } from 'buffer'
import { render } from 'react-dom'
import 'tailwindcss/tailwind.css'
import Wrapper from './layout/wrapper'
window.Buffer = Buffer

render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById('root')
)
