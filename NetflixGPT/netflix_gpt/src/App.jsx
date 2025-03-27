import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import name from 'module'
import Body from './pages/Body';
import {Provider} from "react-redux"
import appStore from './utils/Redux/AppStore/AppStore';

function App() {


  return (
    <Provider store={appStore}>
   <Body/>
   </Provider>
  )
}

export default App
