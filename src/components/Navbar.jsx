import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isMenuOpen]);

    const handleScrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false); // Close menu after clicking
    };

    return (
        <nav className="w-full bg-gray-700 text-white transition-all duration-300">
            {/* Desktop Navigation */}
            <div className="hidden sm:flex justify-between items-center px-4 py-2">
                <div className="flex items-center gap-4">
                    <motion.img
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5 }}
                        src="/1000019635-removebg-preview.png"
                        className="h-[50px] w-[50px] rounded-full transition-all"
                        alt="logo"
                    />
                    <div className="flex gap-4">
                        {[{ name: "Home", id: "home" },
                        { name: "Contact", id: "contact" },
                        { name: "Gallery", id: "gallery" }].map((item, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleScrollToSection(item.id)}
                                className="px-4 py-2 text-sm border border-white rounded-full hover:bg-white hover:text-gray-700 transition"
                            >
                                {item.name}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    
                    {[

                    { name: "Events", id: "events" },
                    { name: "Register", id: "register" }].map((item, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleScrollToSection(item.id)}
                            className="px-4 py-2 text-sm border border-white rounded-full hover:bg-white hover:text-gray-700 transition"
                        >
                            {item.name}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex sm:hidden justify-between items-center px-4 py-2">
                <div className="flex items-center gap-2">
                    <motion.img
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5 }}
                        src="/1000019635-removebg-preview.png"
                        className="h-[40px] w-[45px] rounded-full transition-all"
                        alt="logo"
                    />
                    <span className="font-semibold text-lg">Technovate</span>
                </div>

                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMenu}
                    className="p-1 focus:outline-none"
                >
                    {isMenuOpen ? <FaTimes className="text-white text-xl" /> : <FaBars className="text-white text-xl" />}
                </motion.button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute right-0 top-0 mt-12 w-40 bg-gray-800 shadow-lg z-50 border border-gray-600 rounded-lg overflow-hidden"
                    >
                        <div className="flex flex-col py-2">
                            {[
                                { name: "Home", id: "home" },
                                { name: "Contact", id: "contact" },
                                { name: "Gallery", id: "gallery" },
                                { name: "Events", id: "events" },
                                { name: "Register", id: "register" },
                            ].map((item, index) => (
                                <motion.button
                                    key={index}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * index }}
                                    onClick={() => handleScrollToSection(item.id)}
                                    className="px-4 py-2 text-left text-sm hover:bg-gray-700 transition text-white"
                                >
                                    {item.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
