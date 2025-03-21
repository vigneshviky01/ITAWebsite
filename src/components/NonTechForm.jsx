import { useState } from "react";
import { FaAlignLeft, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import eventsData from "../data/nonTechdata.json";

const NonTechForm = () => {
    const { id } = useParams();
    const eventt = eventsData.find(event => Number(event.id) === Number(id)) || null; // Handle undefined

    const [event, setEvent] = useState({
        name: "Event Name",
        startDate: "Thu, Apr 3",
        startTime: "09:00 AM",
        endDate: "Thu, Apr 3",
        endTime: "05:00 PM",
        timezone: "https://gct.ac.in/",
        location: "Main Auditorium, GCT",
        description: "Technovate'25: Igniting Innovation 🚀"
    });

    if (!eventt) {
        return (
            <div className="md:max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-red-600">
                    Event Not Found
                </h1>
                <p className="text-gray-500">The requested event does not exist.</p>
            </div>
        );
    }

    return (
        <div className="md:max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            {/* Event Name */}
            <h1 className="text-2xl font-semibold text-gray-800">{eventt.title}</h1>

            {/* Date & Time Section */}
            <div className="mt-4 bg-gray-100 p-4 rounded-lg flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="text-gray-500">• Start</span>
                    <div className="flex gap-2 bg-white p-2 rounded-lg border">
                        <span className="text-black">{event.startDate}</span>
                        <span className="text-black">{event.startTime}</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-gray-500">• End</span>
                    <div className="flex gap-2 bg-white p-2 rounded-lg border">
                        <span className="text-black">{event.endDate}</span>
                        <span className="text-black">{event.endTime}</span>
                    </div>
                </div>
            </div>

            {/* Timezone */}
            <div className="mt-2 flex items-center gap-2 bg-gray-100 p-3 rounded-lg">
                <FaGlobe className="text-black" />
                <span className="text-black">{event.timezone}</span>
            </div>

            {/* Location Input */}
            <div className="mt-4 p-3 bg-gray-100 rounded-lg flex items-center gap-2 cursor-pointer">
                <FaMapMarkerAlt className="text-gray-600" />
                <span className="text-gray-500">{event.location}</span>
            </div>

            {/* Description Input */}
            <div className="mt-2 p-3 bg-gray-100 rounded-lg flex items-center gap-2 cursor-pointer">
                <FaAlignLeft className="text-gray-600" />
                <span className="text-gray-500">{event.description}</span>
            </div>
        </div>
    );
};

export default NonTechForm;
