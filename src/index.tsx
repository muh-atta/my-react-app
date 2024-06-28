import { createRoot } from 'react-dom/client'
import React from 'react'
//import ReactDOM from 'react-dom/client'
import 'tailwindcss/tailwind.css'
//import App from 'components/App'

import AppRouter from 'routes/AppRouter'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

//root.render(<App />)

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
