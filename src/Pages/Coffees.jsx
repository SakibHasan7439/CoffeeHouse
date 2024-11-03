import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const Coffees = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className="grid gap-6 grid-cols-1 mb-8 md:grid-cols-2 justify-center lg:grid-cols-3">
                {
                    data.map((coffee)=> <Card 
                    key={coffee?.id}
                    coffee={coffee}
                    >              
                    </Card>)
                }
            </div>
        </div>
    );
};

export default Coffees;