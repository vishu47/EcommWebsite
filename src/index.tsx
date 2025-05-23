import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AppRoutes } from './app/routing/AppRoutes';
import { PageDataProvider } from './uw/providers/PageData';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PageDataProvider>

      {/* we use redux */}
      {/* provides language support */}
      {/* include/added login and sign up routes */}
      <AppRoutes />
      {/* original routes */}
      <ToastContainer />
    </PageDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
