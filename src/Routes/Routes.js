import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Calender from "../Pages/Calender/Calender";
import Hotels from "../Pages/Hotels/Hotels";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://server-three-ochre.vercel.app/locations')
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/calender',
                element: <Calender></Calender>
            },
            {
                path: '/hotels',
                element: <Hotels></Hotels>
            }
        ]
    }
])