import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import RegisterPage from './components/resigster/registerPage.js'
import LoginPage from './components/login/loginPage.js'
import ChatbotPage from './components/chatbot/chatBot.js'
import HistoryPage from './components/history/History.js'
import FavoritePage from './components/Favorite/Favorite.js'
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/register-page', element: <RegisterPage/>},
  {path: '/login-page', element: <LoginPage/>},
  {path: '/chatbot-page', element: <ChatbotPage/>},
  {path: '/history-page', element: <HistoryPage/>},
  {path: '/favorite-page', element: <FavoritePage/>}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
