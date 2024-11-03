import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const coffees = useLoaderData();
    const {category} = useParams();
    const navigate = useNavigate();
    const [coffee, setCoffee] = useState([]);

    useEffect(()=>{
        if(category){
            const filteredByCategory = [...coffees].filter((coffee)=>
                coffee.category === category)
                setCoffee(filteredByCategory);
        }else {
            setCoffee(coffees.slice(0, 6));
        }

    }, [coffees, category]);


    return (
        <div>
            <div className="grid gap-6 grid-cols-1 mb-8 md:grid-cols-2 justify-center lg:grid-cols-3">
                {
                    coffee.map((coffee)=> <Card 
                    key={coffee?.id}
                    coffee={coffee}
                    >              
                    </Card>)
                }
            </div>
            <button onClick={()=> {navigate('/coffees')}} className="bg-yellow-500 rounded-lg px-5 py-3 font-bold">View All</button>
        </div>
    );
};

export default CoffeeCards;