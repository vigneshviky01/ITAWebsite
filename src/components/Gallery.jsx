import { ChevronRight } from "lucide-react";
import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Lazy load the LazyImage component
const LazyImage = lazy(() => import("./LazyImage"));

const imageSets = [
    {
        images: ["/Ita_Gallery/IMG_0180-min.JPG", "/Ita_Gallery/IMG_0710-min.JPG"],
        description: "A plant that thrives indoors with minimal sunlight.",
        className: "col-span-2 md:h-[400px] max-sm:h-[250px]",
    },
    {
        images: ["/Ita_Gallery/IMG_0357-min.JPG", "/Ita_Gallery/IMG_0199-min.JPG"],
        className: "h-[400px] max-sm:h-[180px]",
    },
    {
        images: ["/Ita_Gallery/IMG_0346-min.JPG", "/Ita_Gallery/IMG_1157-min.JPG"],
        className: "h-[400px] max-sm:h-[180px]",
    },
    {
        images: ["/Ita_Gallery/IMG_0372-min.JPG", "/Ita_Gallery/IMG_0518-min.JPG"],
        className: "col-span-2 h-[400px] max-sm:h-[250px]",
    },
];

const Gallery = () => {
    const [indexes, setIndexes] = useState(Array(imageSets.length).fill(0));

    const handleNextImage = (galleryIndex) => {
        setIndexes((prevIndexes) =>
            prevIndexes.map((idx, i) =>
                i === galleryIndex ? (idx + 1) % imageSets[i].images.length : idx
            )
        );
    };

    return (
        <motion.div
            className="p-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="gallery"
        >
            <div className="flex justify-center">
                <motion.h1
                    className="text-[40px] sm:text-[100px] font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    ITA GALLERY
                </motion.h1>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {imageSets.map((item, galleryIndex) => (
                    <motion.div
                        key={galleryIndex}
                        className={`relative rounded-lg overflow-hidden ${item.className}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Suspense
                            fallback={
                                <div className="w-full h-full bg-gray-300 animate-pulse rounded-lg"></div>
                            }
                        >
                            {item.images.map((src, imgIndex) => (
                                imgIndex === indexes[galleryIndex] && (
                                    <LazyImage
                                        key={src}
                                        src={src}
                                        alt={`Gallery Image ${imgIndex + 1}`}
                                        className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                                    />
                                )
                            ))}
                        </Suspense>

                        <motion.button
                            className="absolute right-4 top-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
                            onClick={() => handleNextImage(galleryIndex)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronRight className="w-5 h-5 text-black" />
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Gallery;
