import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import DashBoard from "../Pages/DashBoard";
import ErrorPage from "../Pages/ErrorPage";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/coffees',
                element: <Coffees></Coffees>
            },

            {
                path: 'dashboard',
                element: <DashBoard></DashBoard>
            },
        ]
    }
])

export default Routes;