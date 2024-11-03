import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {
    return (       
        <div role="tablist" className="tabs tabs-lifted mb-8">
            {
                categories.map((category)=> <NavLink to={`/category/${category.category}`}
                key={category?.category}
                role="tab" className={({isActive})=> `tab text-xl ${isActive ? "text-yellow-500 font-bold tab-active" : ""}`}>{category.category}</NavLink>
                )
            }
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array
}
export default Categories;
