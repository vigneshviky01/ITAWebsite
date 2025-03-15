import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import eventsData from "../data/events.json"; // Import JSON data
import NonTech from "./NonTech";

const Events = () => {
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

    // Direct navigation with manual scroll reset
    const handleNavigate = (index) => {
        // First navigate
        navigate(`/event/${index}`);

        // Then force scroll to top
        window.scrollTo(0, 0);
    };

    return (
        <motion.div
            className="w-full flex flex-col items-center bg-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }} id="events"
        >
            {/* Header Section */}
            {/* ... */}
            <motion.div
                className="w-full md:flex px-4 md:px-6 pt-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <h2 className="text-[40px] max-sm:pl-2 sm:text-[80px] md:text-[120px] lg:text-[150px] font-bold leading-tight">Events</h2>

                <p className="md:pt-16 lg:pt-15 pt-2 text-lg md:pl-4 lg:pl-8 max-w-full">
                    Dive into a world of thrilling challenges and contests designed to showcase your skills and creativity. From Paper Presentations to Coding Challenges, Quiz Battles, and more, there's something for everyone. Get ready to push your limits, compete with like-minded innovators, and take home exciting rewards.
                </p>
            </motion.div>

            <motion.div
                className="w-full  px-4 md:px-6 pt-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}>

                <h3 className="md:text-6xl text-3xl font-semibold">Tech Events</h3>


            </motion.div>


            {/* Scroll Container */}
            <div className="relative w-full md:max-w-7xl px-4 py-5 md:py-8 flex items-center">
                {/* Left Scroll Button */}
                <motion.button
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition z-10"
                    onClick={scrollLeft}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft className="w-5 h-5" />
                </motion.button>

                {/* Horizontal Scrollable Events */}
                <div
                    ref={scrollRef}
                    className="flex space-x-5 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-10 w-full"
                    style={{ scrollBehavior: "smooth" }}
                >
                    {eventsData.map((event, index) => (
                        <motion.div
                            key={index}
                            className="min-w-[280px]  p-2 bg-white shadow-lg rounded-xl text-left relative flex flex-col space-y-1 snap-start"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: index * 0.2, ease: "easeInOut" }}
                        >
                            <div className="w-65 h-62 overflow-hidden">

                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover object-top rounded-lg"
                                />
                            </div>

                            <h3 className="text-xl font-bold max-sm:text-lg">{event.title}</h3>
                            <p className="text-gray-500">{event.subheading}</p>

                            {/* Right Arrow Button - MODIFIED CLICK HANDLER */}
                            <motion.button
                                className="absolute right-3 bottom-5 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition"
                                onClick={() => navigate(`/event/${index}`)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* Right Scroll Button */}
                <motion.button
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-md hover:bg-gray-800 transition z-10 
            max-sm:right-2"
                    onClick={scrollRight}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight className="w-5 h-5" />
                </motion.button>
            </div>


            <NonTech />
        </motion.div>
    );
};

export default Events;