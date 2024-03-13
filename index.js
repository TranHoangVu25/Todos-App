


import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import App from './views/App';
 import { Provider } from 'react-redux'
 import { legacy_createStore as createStore } from 'redux';
 import rootReducer from'./store/reducers/rootreducer';

const reduxStore =createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}> 
    <App/>

    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './views/App';
// import reportWebVitals from './reportWebVitals';
// import './styles/global.scss';
// import { BrowserRouter } from 'react-router-dom';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode></BrowserRouter>
   
 
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
    
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
