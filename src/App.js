import "./App.css";

import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import AppRoutes from "./routes/Routes";
import { Provider } from 'react-redux';
import store from './services/redux/store/index';
function App() {
    
  return (
    <>

<Provider store={store}>
    <Router>
      <AppRoutes/>
    </Router>
  </Provider>,

      {/* <Counter /> */}
      {/* <AxiosComponente /> */}
      {/* <IdiomaComponente/> */}
    </>
  );
}

export default App;
