import { ChevronRight } from "lucide-react";
import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazyImage = lazy(() => import("./LazyImage")); // ✅ Dynamic import with lazy()

const imageSets = [
  {
    images: ["https://res.cloudinary.com/doro2emvj/image/upload/v1742104914/IMG_0180-min-transformed_4_whmchg.jpg", "https://res.cloudinary.com/doro2emvj/image/upload/v1742104722/IMG_0710-min-transformed_rstzig.jpg"],
    description: "A plant that thrives indoors with minimal sunlight.",
    className: "col-span-2 md:h-[400px] max-sm:h-[250px]",
  },
  {
    images: [
      "https://res.cloudinary.com/doro2emvj/image/upload/v1742104720/IMG_0357-min-transformed_nvwu49.jpg",
      "https://res.cloudinary.com/doro2emvj/image/upload/v1742104721/IMG_0199-min-transformed_lpbtp2.jpg",
    ],
    className: "h-[400px] max-sm:h-[180px]",
  },
  {
    images: ["https://res.cloudinary.com/doro2emvj/image/upload/v1742104988/IMG_0346-min-transformed_pn9vql.jpg", "https://res.cloudinary.com/doro2emvj/image/upload/v1742104721/IMG_1157-min-transformed_nol4tz.jpg"],
    className: "h-[400px] max-sm:h-[180px]",
  },
  {
    images: ["https://res.cloudinary.com/doro2emvj/image/upload/v1742104721/IMG_0372-min-transformed_hoclbh.jpg", "https://res.cloudinary.com/doro2emvj/image/upload/v1742104687/IMG_0518-min-transformed_tkmtic.jpg"],
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
      <div className="flex justify-center ">
        <motion.h1
          className="text-[40px] sm:text-[100px] font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ITA GALLERY
        </motion.h1>
      </div>

      {/* Maintained original grid layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:px-10">
        {imageSets.map((item, galleryIndex) => (
          <motion.div
            key={galleryIndex}
            className={`relative rounded-lg overflow-hidden flex-grow ${item.className}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            {item.images.map(
              (src, imgIndex) =>
                imgIndex === indexes[galleryIndex] && (
                  <Suspense key={src} fallback={<div className="w-full h-full bg-gray-300 animate-pulse"></div>}>
                    <LazyImage
                      src={src}
                      alt={`Gallery Image ${imgIndex + 1}`}
                      className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                    />
                  </Suspense>
                )
            )}

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
