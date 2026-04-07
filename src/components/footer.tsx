import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './ui/Logo';
import NewsletterForm from './ui/NewsletterForm';

// Helper component for the social media icons
const SocialIcon = ({ children, href = "#" }: { children: React.ReactNode, href?: string }) => (
    <a
        href={href}
        className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
    >
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer>
            {/* Newsletter Subscription Form */}
            <NewsletterForm />
            <div className="bg-[#f8f8f8] pt-16 pb-8">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Footer Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">

                        {/* Left Column: Logo, Info & Socials (Takes up 2 grid spaces) */}
                        <div className="lg:col-span-2">
                            <div className="max-w-[250px] mb-6">
                                <Logo />
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed max-w-[235px] mb-6">
                                Professional lighting solutions for commercial and architectural projects.
                            </p>

                            {/* Social Icons */}
                            <div className="flex space-x-3">
                                {/* LinkedIn */}
                                <SocialIcon>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </SocialIcon>
                                {/* Twitter / X */}
                                <SocialIcon>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </SocialIcon>
                                {/* Instagram */}
                                <SocialIcon>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </SocialIcon>
                                {/* YouTube */}
                                <SocialIcon>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                                </SocialIcon>
                            </div>
                        </div>

                        {/* Quick Link */}
                        <div>
                            <h5 className="font-serif text-lg font-bold text-gray-900 mb-5">Quick Link</h5>
                            <ul className="flex flex-col space-y-3">
                                <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</Link></li>
                                <li><Link to="/categories" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Categories</Link></li>
                                <li><Link to="/new-arrivals" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">New Arrivals</Link></li>
                                <li><Link to="/b2b-trade" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">B2B/Trade</Link></li>
                                <li><Link to="/support" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Support</Link></li>
                            </ul>
                        </div>

                        {/* Shop */}
                        <div>
                            <h5 className="font-serif text-lg font-bold text-gray-900 mb-5">Shop</h5>
                            <ul className="flex flex-col space-y-3">
                                <li><Link to="/shop/led-strips" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">LED Strips</Link></li>
                                <li><Link to="/shop/drivers-and-power" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Drivers & Power</Link></li>
                                <li><Link to="/shop/fixtures" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Fixtures</Link></li>
                                <li><Link to="/shop/waterproof" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Waterproof</Link></li>
                                <li><Link to="/shop/new-arrivals" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">New Arrivals</Link></li>
                            </ul>
                        </div>

                        {/* Account */}
                        <div>
                            <h5 className="font-serif text-lg font-bold text-gray-900 mb-5">Account</h5>
                            <ul className="flex flex-col space-y-3">
                                <li><Link to="/account" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">My Orders</Link></li>
                                <li><Link to="/account/wishlist" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Wishlist</Link></li>
                                <li><Link to="/account/b2b" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">B2B Account</Link></li>
                                <li><Link to="/account/support" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Support</Link></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h5 className="font-serif text-lg font-bold text-gray-900 mb-5">Company</h5>
                            <ul className="flex flex-col space-y-3">
                                <li><Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About Us</Link></li>
                                <li><Link to="/terms-and-conditions" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms & Conditions</Link></li>
                                <li><Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/shipping-and-returns" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Shipping & Returns</Link></li>
                                <li><Link to="/faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</Link></li>
                            </ul>
                        </div>

                    </div>

                    {/* Bottom Copyright Bar */}
                    <div className="mt-16 pt-8 border-t border-gray-300">
                        <p className="text-center text-sm text-gray-700">
                            © 2026 Morvoski. All rights reserved. GST: 07XXXXX0000X1Z5
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;