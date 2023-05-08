import React  from 'react';
import './App.css';
import NavBar from './components/Header/Navbar';
import Body from './components/body/Body';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Help from './Pages/Help';
import Error from './Pages/Error'

function App() {
  return (
    <>
      {/* {Header}  */}
      <NavBar />
      <Outlet />
      
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />
      },

      {
        path: '/help',
        element: <Help />
      }

    ]


  },



])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);




