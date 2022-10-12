import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './routes/root';
import Brew, { action as brewAction } from './routes/brew';
import Potions, {
    loader as potionsLoader,
    action as potionsAction,
} from './routes/potions';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            index: true,
            element: <Brew />,
            action: brewAction,
        },
        {
            path: "/potions/:potionId",
            element: <Potions />,
            loader: potionsLoader,
            action: potionsAction
        },
      ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
