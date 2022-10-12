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
import Potion, {
    loader as potionLoader,
    action as potionAction,
} from './routes/potion';

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
            element: <Potion />,
            loader: potionLoader,
            action: potionAction
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
