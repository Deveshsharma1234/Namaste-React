import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import appStore from './redux/store/appStore.js'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes'
import './index.css'

createRoot(document.getElementById('root')).render(

  <Provider store={appStore}>
  <StrictMode>
  <RouterProvider router={appRouter}/>
  </StrictMode>,
  </Provider>

)
