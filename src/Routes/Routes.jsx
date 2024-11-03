import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import DashBoard from "../Pages/DashBoard";
import ErrorPage from "../Pages/ErrorPage";
import CoffeeCards from "../Components/CoffeeCards";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('../categories.json'),
                children: [
                    {
                        path: '/category/:category',
                        element: <CoffeeCards></CoffeeCards>,
                        loader: ()=>fetch('../coffees.json')
                    },
                    {
                        path: '/',
                        element: <CoffeeCards></CoffeeCards>,
                        loader: ()=>fetch('../coffees.json')
                    },

                ]
            },

            {
                path: '/coffees',
                element: <Coffees></Coffees>,
                loader: ()=>fetch('../coffees.json')
            },

            {
                path: 'dashboard',
                element: <DashBoard></DashBoard>
            },
        ]
    }
])

export default Routes;