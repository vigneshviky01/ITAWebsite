import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className }) => {
    return (
        <motion.img
            src={src}
            alt={alt || "Gallery image"}
            className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            loading="lazy"
        />
    );
};

export default LazyImage;
