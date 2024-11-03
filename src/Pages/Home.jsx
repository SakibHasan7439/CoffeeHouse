import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Heading title={"Browse Coffee by category"}
             subtitle={"Choose your desired coffee category to browse through specific coffees that fit in your test "}
            >
            </Heading>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;