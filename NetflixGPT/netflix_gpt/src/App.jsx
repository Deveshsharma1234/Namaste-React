
import Body from './pages/Body';
import {Provider} from "react-redux"
import appStore from './utils/Redux/AppStore/appStore';

function App() {


  return (
    <Provider store={appStore}>
   <Body/>
   </Provider>
  )
}

export default App
