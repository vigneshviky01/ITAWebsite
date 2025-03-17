import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import Navbar from './Navbar';

const Header = () => {
    // State to control lightning flashes
    const [lightningActive, setLightningActive] = useState(false);

    // Trigger lightning effect at regular intervals (every ~3 seconds)
    // useEffect(() => {
    //     const triggerLightning = () => {
    //         setLightningActive(true);

    //         // Lightning flash duration
    //         setTimeout(() => {
    //             setLightningActive(false);
    //         }, 200);
    //     };

    //     // Set lightning to occur roughly every 3 seconds with small random variation
    //     const intervalId = setInterval(() => {
    //         triggerLightning();
    //     }, 2000 + (Math.random() * 500 - 250)); // 3000ms ± 250ms for natural variation

    //     // Cleanup on unmount
    //     return () => {
    //         clearInterval(intervalId);
    //         setLightningActive(false);
    //     };
    // }, []);

    return (
        <div className="max-sm:mt-0 m-0 p-0 text-white w-full overflow-hidden">
            <Navbar />
            <section className="flex flex-col w-full items-center text-white relative h-[calc(65vh-80px)] sm:h-[calc(100vh-76px)] overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    {/* Base layer - Dark gradient */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-95"
                        animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                        style={{ backgroundSize: '200% 200%' }}
                    />




                    {/* Cloud layer */}
                    <div className="absolute inset-0 overflow-hidden">
                        {/* Larger Dark Cloud Group */}
                        <div className="absolute top-0 left-0 w-full h-32 sm:h-48">
                            {/* Cloud parts */}
                            <motion.div
                                className="absolute rounded-full bg-gray-900 opacity-90 blur-md"
                                style={{
                                    width: '300px',
                                    height: '120px',
                                    top: '10%',
                                    left: '8%',
                                }}
                                animate={{
                                    x: [0, 20, 0],
                                }}
                                transition={{
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute rounded-full bg-gray-800 opacity-90 blur-md"
                                style={{
                                    width: '250px',
                                    height: '100px',
                                    top: '0%',
                                    left: '25%',
                                }}
                                animate={{
                                    x: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute rounded-full bg-gray-900 opacity-90 blur-md"
                                style={{
                                    width: '280px',
                                    height: '110px',
                                    top: '8%',
                                    left: '45%',
                                }}
                                animate={{
                                    x: [0, 25, 0],
                                }}
                                transition={{
                                    duration: 18,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute rounded-full bg-gray-800 opacity-90 blur-md"
                                style={{
                                    width: '320px',
                                    height: '130px',
                                    top: '2%',
                                    right: '5%',
                                }}
                                animate={{
                                    x: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 17,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>
                    </div>

                    {/* Rain effect */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(290)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-blue-100 opacity-20 rounded-full"
                                style={{
                                    width: '1px',
                                    height: Math.random() * 15 + 10, // Raindrop length varies
                                    left: `${Math.random() * 100}%`,
                                    top: `-20px`,
                                }}
                                animate={{
                                    y: ['0vh', '100vh'],
                                }}
                                transition={{
                                    duration: Math.random() * 0.5 + 0.7, // Speed varies
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: Math.random() * 2, // Staggered start
                                }}
                            />
                        ))}
                    </div>

                    {/* Lightning bolts */}
                    <div className="absolute inset-0 overflow-hidden">
                        {lightningActive && (
                            <>
                                {/* Main Lightning Bolt */}
                                <svg className="absolute top-0 left-1/4 w-24 h-64 z-20" viewBox="0 0 100 400" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M50,0 L40,100 L60,120 L30,240 L55,260 L20,400"
                                        stroke="white"
                                        strokeWidth="4"
                                        fill="none"
                                        strokeOpacity="0.8"
                                    />
                                </svg>

                                {/* Secondary Lightning Bolt */}
                                <svg className="absolute top-0 right-1/3 w-16 h-48 z-20" viewBox="0 0 100 400" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M50,0 L55,80 L35,120 L60,180 L40,300"
                                        stroke="white"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeOpacity="0.6"
                                    />
                                </svg>
                            </>
                        )}
                    </div>
                </div>

                {/* Content (same as original) */}
                <motion.h1
                    className="text-[50px] sm:text-[80px] max-sm:pt-8 md:pt-40 md:text-[120px] lg:text-[150px] font-lufka font-bold text-center relative z-10 leading-none mt-12 sm:mt-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 2, y: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                    Technovate
                </motion.h1>




                <motion.div
                    className="w-full px-4 sm:px-8 md:px-10 z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 2, y: 0 }}
                    transition={{ duration: 3.5, ease: "easeOut" }}
                >
                    <p className="mx-auto text-center mt-4 max-w-sm sm:max-w-md md:max-w-2xl text-gray-300 text-sm sm:text-base">
                        Get ready for Technovate'25, the ultimate inter-college tech competition! Showcase your skills, creativity, and passion for technology, and win exciting prizes. Learn from industry experts, demonstrate your expertise, and connect with fellow innovators.
                    </p>
                </motion.div>



                {/* <motion.div
                    className="w-full px-4 sm:px-8 md:px-10 md:mt-30 sm:mt-12 flex flex-col items-center sm:items-start z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 2, y: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                >
                    <div className="max-sm:hidden bg-gray-500 bg-opacity-80 text-white p-4 sm:p-6 rounded-tl-[30px] sm:rounded-tl-[50px] max-w-[280px] sm:max-w-[350px] md:max-w-[400px] shadow-lg">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">5+ Tech <br /> Events</h2>
                        <p className="pt-2 text-xs sm:text-sm">
                        Join us at Technovate and be a part of an exciting journey of innovation and technology!
                        </p>
                    </div>
                </motion.div> */}
            </section>
        </div>
    );
};

export default Header;