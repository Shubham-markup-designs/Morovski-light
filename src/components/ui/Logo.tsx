import React from 'react';
import logo from '../../assets/home/logo.png';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
    return (
        <Link to="/">
            <img className='w-full h-[50px]' src={logo} alt="Morvoski Logo" />
        </Link>
    );
};

export default Logo;