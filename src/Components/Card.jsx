import PropTypes from 'prop-types';

const Card = ({ coffee }) => {
    const {name, image, category, origin, type, rating, popularity} = coffee || {};
    return (
        <div className="card card-compact bg-base-100 border-2 gap">
            <figure>
                <img className="w-full h-[240px] object-cover"
                src={image}
                alt={`${name} image`} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">name: {name}</h2>
                <p className="font-semibold">category: {category}</p>
                <p className="font-semibold">type: {type}</p>
                <p className="font-semibold">origin: {origin}</p>
                <p className="font-semibold">rating: {rating}</p>
                <p className="font-semibold">popular: {popularity}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    coffee: PropTypes.object
}
export default Card;