import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center gap-6 mt-20'>
            <h1>This Page is not Found</h1>
            <p>The page you are looking for does not exist</p>
            <Link to={'/'}><button className='btn btn-soft btn-error'>Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;