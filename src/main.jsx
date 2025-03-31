import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics/>
    <SpeedInsights/>
    <App />
  </StrictMode>,
)
