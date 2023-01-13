import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store'
import { Provider } from 'react-redux'
import App from './App'
import GlobalStyled from './styledComponents/GlobalStyled.styled';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled/>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    
  </React.StrictMode>
)
