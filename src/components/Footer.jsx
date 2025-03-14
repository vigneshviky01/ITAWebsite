import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaGlobe, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/"; // Check if on Home page
    const [stars, setStars] = useState([]);

    // Generate random stars on component mount
    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            const starCount = window.innerWidth < 768 ? 50 : 100; // Increased star count

            for (let i = 0; i < starCount; i++) {
                // Create different types of stars (small, medium, bright)
                const starType = Math.random();
                const isBrightStar = starType > 0.85;
                const isMediumStar = starType > 0.6 && starType <= 0.85;

                newStars.push({
                    id: i,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    size: isBrightStar ?
                        Math.random() * 0.4 + 0.3 :
                        (isMediumStar ? Math.random() * 0.3 + 0.2 : Math.random() * 0.2 + 0.1),
                    animationDuration: isBrightStar ?
                        Math.random() * 2 + 1 :
                        Math.random() * 4 + 2,
                    animationDelay: Math.random() * 5,
                    brightness: isBrightStar ? [0.3, 1, 0.3] : [0.1, 0.7, 0.1],
                    hasTwinkle: isBrightStar || Math.random() > 0.7
                });
            }
            setStars(newStars);
        };

        generateStars();

        // Regenerate stars on window resize
        window.addEventListener("resize", generateStars);
        return () => window.removeEventListener("resize", generateStars);
    }, []);

    return (
        <footer
            id="contact"
            className={`w-full text-white  md:py-12 px-6 text-center transition-all duration-500 relative overflow-hidden
                ${isHomePage ? "bg-[#04050a]" : "bg-[#04050a]"}`} // Darker space background
        >
            {/* Animated background with moon and stars */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* Space gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0c1445] via-[#0c0d24] to-[#04050a] opacity-70"></div>

                {/* Full moon */}
                <motion.div
                    className="absolute right-20 top-12 bg-gradient-to-br from-[#f9f9f5] to-[#e6e6d8] w-16 h-16 md:w-32 md:h-32 rounded-full"
                    initial={{ opacity: 0.8 }}
                    animate={{
                        opacity: [0.8, 0.95, 0.8],
                        boxShadow: [
                            "0 0 25px 5px rgba(255, 255, 240, 0.8)",
                            "0 0 40px 10px rgba(255, 255, 240, 0.95)",
                            "0 0 25px 5px rgba(255, 255, 240, 0.8)"
                        ]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Moon details */}
                    <div className="absolute left-1/4 top-1/4 w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#e6e6d8] opacity-70"></div>
                    <div className="absolute left-2/3 top-1/3 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#e6e6d8] opacity-60"></div>
                    <div className="absolute left-1/3 top-2/3 w-2 h-2 md:w-5 md:h-5 rounded-full bg-[#e6e6d8] opacity-50"></div>
                </motion.div>

                {/* Stars */}
                {stars && stars.length > 0 ? (
                    stars.map((star) => (
                        <motion.div
                            key={star.id}
                            className={`absolute rounded-full ${star.hasTwinkle ? "bg-white" : "bg-blue-50"}`}
                            style={{
                                left: star.left,
                                top: star.top,
                                width: `${star.size}rem`,
                                height: `${star.size}rem`,
                            }}
                            initial={{ opacity: star.brightness?.[0] || 1 }}  // Check if brightness exists
                            animate={{
                                opacity: star.hasTwinkle ? star.brightness || [1, 1] : [star.brightness?.[0] || 1, star.brightness?.[0] || 1],
                                scale: star.hasTwinkle ? [1, 1.2, 1] : 1,
                            }}
                            transition={{
                                duration: star.animationDuration,
                                repeat: Infinity,
                                delay: star.animationDelay,
                                ease: "easeInOut",
                            }}
                        />
                    ))
                ) : (
                    <p>No stars available</p> // Fallback for empty array
                )}


                {/* Occasional shooting stars */}
                <motion.div
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ top: "-5%", left: "10%", opacity: 0 }}
                    animate={{
                        top: "30%",
                        left: "30%",
                        opacity: [0, 1, 0],
                        boxShadow: [
                            "0 0 0 0 rgba(255,255,255,0)",
                            "0 0 20px 10px rgba(255,255,255,0.8)",
                            "0 0 0 0 rgba(255,255,255,0)"
                        ]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 15,
                    }}
                />

                <motion.div
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ top: "-5%", left: "75%", opacity: 0 }}
                    animate={{
                        top: "40%",
                        left: "45%",
                        opacity: [0, 1, 0],
                        boxShadow: [
                            "0 0 0 0 rgba(255,255,255,0)",
                            "0 0 20px 10px rgba(255,255,255,0.8)",
                            "0 0 0 0 rgba(255,255,255,0)"
                        ]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 23,
                        delay: 7
                    }}
                />
            </div>

            {/* Top Section */}
            <div className="relative max-w-4xl mx-auto z-10">
                <div className="absolute max-sm:top-15 top-0 left-1/2 max-sm:left-2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-full">
                    <img
                        src="/public/1000019635-removebg-preview.png"
                        alt="React Logo"
                        className="max-sm:w-12 max-sm:h-12 w-25 h-25"
                    />
                </div>
                <motion.h2
                    className="text-3xl md:text-6xl pt-12 font-bold mt-12"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    Join the Community!
                </motion.h2>
                <motion.p
                    className="text-gray-300 max-sm:pt-4 mt-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Stay connected and get exclusive tips, updates, and special offers. Be a part of something great!
                </motion.p>
            </div>

            {/* Social Links Section with Icons */}
            <div className="flex justify-center max-sm:pt-7 gap-6 mt-6 relative z-10">
                {[
                    { icon: FaInstagram, link: "https://www.instagram.com/ita_gct?igsh=aWFncHk0cXdjOTVj" },
                    { icon: FaLinkedin, link: "www.linkedin.com/in/sathish-p-a09695295" },
                    { icon: FaGlobe, link: "https://gct.ac.in/" },
                    { icon: FaWhatsapp, link: "https://chat.whatsapp.com/FDdx7gUoMp3DLajQqDa4Nv" }
                ].map((platform, index) => (
                    <motion.a
                        key={index}
                        href={platform.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                            scale: 1.2,
                            boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)",
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            rotate: { duration: 0.5, ease: "easeInOut" }
                        }}
                        className="p-3 rounded-full bg-white text-black hover:bg-gray-200"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1 * index + 0.3
                        }}
                        viewport={{ once: true }}
                    >
                        <platform.icon size={40} />
                    </motion.a>
                ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-6 border-t border-gray-700 pt-4 relative z-10">
                <p className="text-gray-300">©2025, All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;