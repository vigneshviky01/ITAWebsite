import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import eventsData from "../data/nonTech.json"; // Import JSON data

const NonTech = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    // Scroll Left
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    // Scroll Right
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <motion.div
            className="w-full flex flex-col items-center bg-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
        >
            
            <motion.div
                className="w-full  px-4 md:px-6 pt-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeInOut" }}>

                    <h3 className="md:text-6xl text-3xl font-semibold">NON Tech Events</h3>


            </motion.div>

            {/* Scroll Container */}
            <div className="relative w-full md:max-w-7xl px-4 py-5 md:py-8">
                {/* Left Scroll Button */}
                <motion.button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition z-10"
                    onClick={scrollLeft}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft className="w-5 h-5" />
                </motion.button>

                {/* Horizontal Scrollable Events */}
                <div
                    ref={scrollRef}
                    className="flex space-x-5 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-10"
                    style={{ scrollBehavior: "smooth" }}
                >
                    {eventsData.map((event, index) => (
                        <motion.div
                            key={index}
                            className="md:min-w-[280px] min-w-[180px] p-2 bg-white shadow-lg rounded-xl text-left relative flex flex-col space-y-1 snap-start"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 3, delay: index * 0.2, ease: "easeInOut" }}
                        >
                            <img src={event.image} alt={event.title} className="w-full md:h-65   object-cover rounded-lg" />
                            <h3 className="text-xl font-bold max-sm:text-lg">{event.title}</h3>
                            <p className="text-gray-500 ">{event.subheading}</p>

                            {/* Right Arrow Button */}
                            <motion.button
                                className="absolute right-4 bottom-5 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition"
                                onClick={() => navigate(`/events/${index}`)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronRight className="w-5 h-5 " />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Right Scroll Button */}
                <motion.button
                    className="absolute max-sm:hidden right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition z-10"
                    onClick={scrollRight}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight className="w-5 h-5" />
                </motion.button>
            </div>
        </motion.div>
    );
};

export default NonTech;
