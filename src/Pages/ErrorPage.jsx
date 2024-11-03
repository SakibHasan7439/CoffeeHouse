import { Link } from 'react-router-dom';
import error from '/src/assets/error.avif'

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center relative h-screen">
            <img src={error} alt="error image" />
            <Link to={'/'} className='absolute bottom-[36%]'>
            <button className='text-xl px-12 py-4 bg-[#202237] border-2 border-red-700 rounded-full font-bold text-white'>Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;