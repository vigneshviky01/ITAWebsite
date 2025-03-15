import { useParams } from "react-router-dom";
import eventsData from "../data/eventsdata.json";
import { motion } from "framer-motion";
import EventForm from "./EventForm";
import Footer from "./Footer";
import { useEffect } from "react";
import SnowAnimation from "./SnowAnimation"; // Import the new component
import { FaWhatsapp } from "react-icons/fa";

const EventsDetails = () => {
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === Number(id)); // Convert id to number
  if (!event) {
    return <h2 className="text-center text-xl">Event Not Found</h2>;
  }
  useEffect(() => {
          window.scrollTo(0, 0);
          
          // Optional: Also set a timeout to handle any delays in rendering
          const timer = setTimeout(() => {
              window.scrollTo(0, 0);
          }, 100);
          
          return () => clearTimeout(timer);
      }, []);

  return (
    <>
      {/* Add the snow animation component */}
      <SnowAnimation />

      <motion.div
  className="flex flex-col px-8 md:px-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white min-h-screen flex-grow"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>

        {/* Event Title */}
        <motion.h1
          className="text-[40px] sm:text-[100px] font-bold mt-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {event.title}
        </motion.h1>

        {/* Rest of your component remains the same */}
        {/* Image & Description Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8 mt-6 flex-grow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Event Image */}
          <motion.div
            className="md:w-1/2 lg:w-2/5 flex-grow"
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={event.image}
              alt={event.title}
              className="w-full h-auto md:h-[350px] object-cover rounded-3xl shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>

          {/* Event Description */}
          <motion.div
            className="md:w-1/2 lg:w-3/5 flex flex-col justify-center flex-grow"
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl font-semibold mb-4"
              whileHover={{ color: "#ccc" }}
            >
              {event.title1}
            </motion.h1>
            <motion.p
              className="text-gray-300 text-lg leading-relaxed"
              whileHover={{ color: "#fff" }}
            >
              {event.description}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Topics Section */}
        {(event.id == 0 || event.id == 1) && (
        <motion.div
          className="sm:flex gap-11 flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="mt-10 p-6 bg-gray-700 rounded-lg shadow-lg w-full md:w-3/4  h-auto max-h-[300px] overflow-y-auto flex-grow"
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4 text-center"
              whileHover={{ color: "#ddd" }}
            >
              💡 Welcomed Topics
            </motion.h2>
            
            <ul className="md:text-center list-disc md:list-none pl-6 md:pl-0 space-y-2 text-gray-300">
              {[
                "Artificial Intelligence & Machine Learning",
                "Cybersecurity & Ethical Hacking",
                "Blockchain Technology",
                "Cloud Computing & Edge Computing",
                "Internet of Things (IoT)",
              ].map((topic, index) => (
                <motion.li
                  key={index}
                  className="transition-colors duration-300 ease-in-out hover:text-white"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <strong>{topic}</strong>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        )}

        {/* Rest of your component remains unchanged */}
        {/* Guidelines Section */}
        <motion.div
          className="md:flex md:mt-15 gap-4 flex-grow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {/* ... rest of the Guidelines Section ... */}
          <motion.img
            src={event.image2}
            alt="guideline"
            className="md:w-lg max-sm:hidden md:h-96 w-48 h-56 rounded-2xl"
          />

          {event.guidelines && (
            <motion.div className="mt-0 p-4 max-sm:mt-6 rounded-lg shadow-md flex-grow">
              <motion.h3
                className="md:text-6xl text-xl font-bold"
                whileHover={{ color: "#ddd" }}
              >
                ⚖️ Guidelines:
              </motion.h3>
              <ul className="list-disc list-inside mt-3 md:mt-9">
                {Object.values(event.guidelines).map((rule, index) => (
                  <motion.li
                    className="md:text-lg py-2"
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 * index }}
                  >
                    {rule}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>

        <div className="md:flex md:mt-10 flex-grow">
          {/* Additional Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="flex-grow"
          >
            <motion.img
              src="/Screenshot 2025-03-10 at 12.05.44 PM.png"
              alt="welcome page"
              className="rounded-4xl max-sm:hidden"
            />
          </motion.div>

          <div className="max-sm:mt-5 md:mt-10 md:ml-10 flex-grow">
            <EventForm />
          </div>
        </div>

        {/* Register Button */}
        <motion.div className="flex justify-center mt-20">
          <a
            href="https://forms.gle/gHqB4LVGFxU51wmG6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="md:py-4 md:px-8 py-2 px-4 rounded-3xl border border-white md:text-4xl hover:bg-white hover:text-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Register Now
            </motion.button>
          </a>
        </motion.div>

        <div className="md:flex md:flex-grow md:justify-center mb-5">
          <motion.h1
            className="md:text-3xl sm:text-xl max-sm:p-9 md:mt-10 font-bold mt-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            For more details, join our community through the WhatsApp link !!!
          </motion.h1>

          <a
            href={event.link}
            target="_blank"
            className="md:mt-5 md:ml-10 flex justify-center"
            rel="noopener noreferrer"
          >
            <motion.button
              className="flex justify-center md:py-3 md:px-6 py-2 px-4 rounded-3xl border border-white md:text-4xl hover:bg-white hover:text-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FaWhatsapp size={40} className="max-sm:hidden md:mr-3"/>
              Join Us
            </motion.button>
          </a>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default EventsDetails;
