import React from 'react';
import ReactDOM from 'react-dom/client';
import './Index.css';
import App from './App.js';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Welcome from './pages/Welcome.js';
import Events from './pages/Events.js';
import Contact from './pages/Contact.js';
import Errorpage from './pages/Errorpage.js';
import Loading from './pages/Loading.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Errorpage />}>
      <Route index element={<Welcome />} />
      <Route path='/events' element={<Events />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/error' element={<Errorpage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
