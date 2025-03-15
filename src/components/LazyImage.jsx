import { motion } from 'framer-motion';
import React, { Suspense, lazy } from 'react';
const LazyImage = ({ src, alt, className }) => {
    return (
        <Suspense>
            <motion.img
                src={src}
                alt={alt || "Gallery image"}
                className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${className}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                loading="lazy"
            />
        </Suspense>
    );
};

export default LazyImage;
