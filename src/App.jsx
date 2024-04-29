// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Children, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Form from './components/Form.jsx';
import View from './View.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Root.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Person from './pages/Person.jsx';

function App() {
  const router = createBrowserRouter([
    
    { 
      path: '/',
     element: <Root />,
     children:[
      { path: '/', element: <Home />},
      { path: '/about', element: <About/>},
      { path: '/person', element: <Person/>},

     ],
    },
    
  ]);

  return <RouterProvider router={router} />;


}


export default App;
