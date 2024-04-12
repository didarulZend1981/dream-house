import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import ContextComponent from './context/ContextComponent.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <ContextComponent>
              <RouterProvider router={router}>
                
              </RouterProvider>
      </ContextComponent>
      
  </React.StrictMode>,
)