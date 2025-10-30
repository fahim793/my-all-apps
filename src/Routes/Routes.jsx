import React from 'react';
import { createBrowserRouter } from "react-router";
import Roots from '../Pages/Roots/Roots';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from './../Pages/AppDetails/AppDetails';
import Error from '../Pages/Error/Error';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Roots,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('/data.json')
            },
            {
                path: "allapps",
                Component: AllApps,
                loader: () => fetch('/data.json')
            },
            {
                path: "installation",
                Component: Installation
            },
            {
                path: 'appDetails/:id',
                Component: AppDetails,
                loader: () => fetch('/data.json')
            },
            {
                path: '*',
                Component: Error
            }
        ]
    },
    {
        path: '*',
        Component: Error
    }
]);