import React from 'react';
import { Link } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiUserCircle } from "react-icons/pi";
import Logo from './ui/Logo';

const Navbar: React.FC = () => {
    return (
        <header className="shadow-md w-full">
            <div className="flex bg-gray-950 w-full">
                <div className="max-w-[1440px] w-full mx-auto p-3 flex items-center justify-between">
                    <span className='text-gray-50'>Free shipping on orders over ₹1,000</span>
                    <Link to="/support" className="text-gray-50 hover:text-yellow-700 transition-colors">
                        Open a B2B trade account
                    </Link>
                </div>
            </div>
            <nav className="w-full bg-white">
                <div className="max-w-[1440px] mx-auto p-3 flex items-center justify-between">
                    {/* Logo on the left */}
                    <div className="flex items-center max-w-[200px]">
                        <Logo />
                    </div>

                    {/* Nav items in the center */}
                    <div className="flex space-x-6">
                        <Link to="/" className="text-gray-950 hover:text-yellow-800 transition-colors">
                            Home
                        </Link>
                        <Link to="/categories" className="text-gray-950 hover:text-yellow-800 transition-colors">
                            Categories
                        </Link>
                        <Link to="/new-arrivals" className="text-gray-950 hover:text-yellow-800 transition-colors">
                            New Arrivals
                        </Link>
                        <Link to="/b2b-trade" className="text-gray-950 hover:text-yellow-800 transition-colors">
                            B2B/Trade
                        </Link>
                        <Link to="/support" className="text-gray-950 hover:text-yellow-800 transition-colors">
                            Support
                        </Link>
                    </div>

                    {/* Icons on the right */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-700 hover:text-gray-900 transition-colors text-xl">
                            <RiSearchLine />
                        </button>
                        <button className="text-gray-700 hover:text-gray-900 transition-colors text-xl">
                            <HiOutlineShoppingBag />
                        </button>
                        <button className="text-gray-700 hover:text-gray-900 transition-colors text-xl">
                            <PiUserCircle />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
