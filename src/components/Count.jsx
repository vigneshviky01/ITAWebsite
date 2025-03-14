import React from "react";
import { motion } from "framer-motion";

const Count = () => {
    return (
        <motion.div 
            className="bg-yellow-500 w-54  md:w-80 p-6 md:h-62 mt-10 rounded-2xl shadow-lg flex flex-col items-center text-center relative 
            transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-yellow-400"
            initial={{ opacity: 0, y: 50 }} // Starts hidden and moves up
            animate={{ opacity: 1, y: 0 }} // Becomes visible
            transition={{ duration: 3, ease: "easeOut" }} // Smooth effect
        >
            {/* Title */}
            <motion.h2 
                className="text-lg font-bold tracking-wide border-b-2 border-dashed border-gray-600 pb-1"
                initial={{ x: -50, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 3, delay: 0.3 }}
            >
                MEMBERS COUNT
            </motion.h2>

            {/* Count Number with Bounce Effect */}
            <motion.p 
                className="text-6xl max-sm:text-4xl font-bold mt-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 3, type: "spring", stiffness: 120 }}
            >
                2
            </motion.p>

            {/* Description with a Slide-in Effect */}
            <motion.p 
                className="text-gray-700 text-sm mt-2 px-4"
                initial={{ x: 50, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 4, delay: 0.5 }}
            >
                Receive a universal entry ticket to five events related to modern technologies 
            </motion.p>
        </motion.div>
    );
};

export default Count;
