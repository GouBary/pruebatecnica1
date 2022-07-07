import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppRouters from './routers/AppRouters';
import "bootstrap/dist/css/bootstrap.min.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>
    <AppRouters/>
  </Provider>

 
);

