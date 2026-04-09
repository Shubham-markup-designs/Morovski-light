import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiUserCircle } from "react-icons/pi";
import { HiBars3, HiChevronDown, HiXMark } from "react-icons/hi2";
import Logo from "./ui/Logo";

const categoryLinks = [
    { to: "/categories/led-strips", label: "LED Strips" },
    { to: "/categories/fixtures", label: "Fixtures" },
    { to: "/categories/waterproof", label: "Waterproof" },
    { to: "/categories/industrial", label: "Industrial" },
    { to: "/categories/dimmable", label: "Dimmable" },
    { to: "/categories/drivers", label: "Drivers" },
];

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/new-arrivals", label: "New Arrivals" },
    { to: "/b2b-trade", label: "B2B/Trade" },
    { to: "/support", label: "Support" },
];

const Navbar: React.FC = () => {
    const headerRef = useRef<HTMLElement | null>(null);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
    const [isDesktopCategoriesOpen, setIsDesktopCategoriesOpen] = useState(false);

    useEffect(() => {
        const updateHeaderHeight = () => {
            setHeaderHeight(headerRef.current?.getBoundingClientRect().height ?? 0);
        };

        updateHeaderHeight();
        window.addEventListener("resize", updateHeaderHeight);

        return () => window.removeEventListener("resize", updateHeaderHeight);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsMobileCategoriesOpen(false);
    };

    return (
        <>
            <header ref={headerRef} className="w-full shadow-md">
                <div className="flex w-full bg-gray-950">
                    <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-3 px-4 py-3 text-sm">
                        <span className="hidden text-gray-50 sm:inline">
                            Free shipping on orders over Rs.1,000
                        </span>
                        <Link
                            to="/support"
                            className="text-gray-50 transition-colors hover:text-yellow-700"
                        >
                            Open a B2B Trade Account
                        </Link>
                    </div>
                </div>

                <nav className="w-full bg-white">
                    <div className="mx-auto max-w-[1440px] px-4 py-3">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex max-w-[200px] items-center">
                                <Logo />
                            </div>

                            <div className="hidden items-center gap-6 lg:flex">
                                <Link
                                    to="/"
                                    className="text-gray-950 transition-colors hover:text-yellow-800"
                                >
                                    Home
                                </Link>

                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsDesktopCategoriesOpen(true)}
                                    onMouseLeave={() => setIsDesktopCategoriesOpen(false)}
                                >
                                    <button
                                        type="button"
                                        className="flex items-center gap-2 text-gray-950 transition-colors hover:text-yellow-800"
                                        onClick={() =>
                                            setIsDesktopCategoriesOpen((prev) => !prev)
                                        }
                                        aria-expanded={isDesktopCategoriesOpen}
                                    >
                                        Categories
                                        <HiChevronDown
                                            className={`transition-transform duration-300 ${isDesktopCategoriesOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`absolute left-1/2 top-full z-30 mt-4 w-72 -translate-x-1/2 rounded-3xl border border-gray-200 bg-white p-4 shadow-[0_24px_80px_rgba(15,23,42,0.14)] transition-all duration-300 ${isDesktopCategoriesOpen
                                                ? "visible translate-y-0 opacity-100"
                                                : "invisible -translate-y-2 opacity-0"
                                            }`}
                                    >
                                        <div className="mb-3 border-b border-gray-100 pb-3">
                                            <p className="text-sm uppercase tracking-[0.18em] text-gray-400">
                                                Shop by category
                                            </p>
                                        </div>
                                        <div className="grid gap-2">
                                            {categoryLinks.map((item) => (
                                                <Link
                                                    key={item.to}
                                                    to={item.to}
                                                    className="rounded-2xl px-4 py-3 text-gray-800 transition-colors hover:bg-gray-50 hover:text-yellow-800"
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {navLinks.map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        className="text-gray-950 transition-colors hover:text-yellow-800"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="hidden items-center gap-4 lg:flex">
                                <button
                                    type="button"
                                    className="text-xl text-gray-700 transition-colors hover:text-gray-900"
                                    aria-label="Search"
                                >
                                    <RiSearchLine />
                                </button>
                                <button
                                    type="button"
                                    className="text-xl text-gray-700 transition-colors hover:text-gray-900"
                                    aria-label="Shopping bag"
                                >
                                    <HiOutlineShoppingBag />
                                </button>
                                <Link
                                    to="/login"
                                    className="text-xl text-gray-700 transition-colors hover:text-gray-900"
                                    aria-label="Login"
                                >
                                    <PiUserCircle />
                                </Link>
                            </div>

                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-full border border-gray-200 p-2 text-2xl text-gray-900 lg:hidden"
                                onClick={() => setIsMenuOpen((prev) => !prev)}
                                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <HiXMark /> : <HiBars3 />}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <div
                className={`fixed inset-x-0 z-30 bg-black/35 transition-opacity duration-300 lg:hidden ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                    }`}
                style={{
                    top: headerHeight,
                    height: `calc(100vh - ${headerHeight}px)`,
                }}
                onClick={closeMenu}
            />

            <div
                className={`fixed right-0 z-40 w-full max-w-md overflow-y-auto bg-white shadow-[-24px_0_60px_rgba(15,23,42,0.18)] transition-transform duration-500 ease-out lg:hidden ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{
                    top: headerHeight,
                    height: `calc(100vh - ${headerHeight}px)`,
                }}
            >
                <div className="flex min-h-full flex-col px-6 py-8">
                    <div className="mt-8 flex flex-1 flex-col">
                        <div className="space-y-2">
                            <Link
                                to="/"
                                className="block rounded-2xl px-4 py-4 text-lg text-gray-950 transition-colors hover:bg-gray-50 hover:text-yellow-800"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>

                            <div className="rounded-3xl border border-gray-200 bg-gray-50/80">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between px-4 py-4 text-left text-lg text-gray-950"
                                    onClick={() => setIsMobileCategoriesOpen((prev) => !prev)}
                                    aria-expanded={isMobileCategoriesOpen}
                                >
                                    <span>Categories</span>
                                    <HiChevronDown
                                        className={`transition-transform duration-300 ${isMobileCategoriesOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`grid overflow-hidden transition-all duration-300 ${isMobileCategoriesOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="min-h-0">
                                        <div className="space-y-1 px-3 pb-3">
                                            {categoryLinks.map((item) => (
                                                <Link
                                                    key={item.to}
                                                    to={item.to}
                                                    className="block rounded-2xl px-4 py-3 text-base text-gray-700 transition-colors hover:bg-white hover:text-yellow-800"
                                                    onClick={closeMenu}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {navLinks.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className="block rounded-2xl px-4 py-4 text-lg text-gray-950 transition-colors hover:bg-gray-50 hover:text-yellow-800"
                                    onClick={closeMenu}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto border-t border-gray-100 pt-6">
                            <div className="flex items-center gap-4">
                                <button
                                    type="button"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-2xl text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900"
                                    aria-label="Search"
                                >
                                    <RiSearchLine />
                                </button>
                                <button
                                    type="button"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-2xl text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900"
                                    aria-label="Shopping bag"
                                >
                                    <HiOutlineShoppingBag />
                                </button>
                                <Link
                                    to="/login"
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-2xl text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900"
                                    onClick={closeMenu}
                                    aria-label="Login"
                                >
                                    <PiUserCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
