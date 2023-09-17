import ReactDOM from 'react-dom/client'
import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.tsx'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
