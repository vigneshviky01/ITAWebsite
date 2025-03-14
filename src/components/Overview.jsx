import { motion } from 'framer-motion';
import React, { Suspense, lazy } from 'react';

const LazyVideo = lazy(() => import('./LazyVideo'));

const Overview = () => {
    return (
        <div className="max-sm:p-2">
            {/* Animated Heading */}
            <motion.h1
                className="text-[150px] md:pl-10 max-sm:text-6xl flex justify-start max-sm:p-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                Overview
            </motion.h1>

            {/* Description */}
            <p className="max-sm:pl-8 pl-25 md:pb-10">
                Join us for an exciting lineup of events designed to inspire, educate,
                and connect! Whether you're looking to expand your knowledge,
                network with like-minded individuals, or simply enjoy a great experience,
                our events cater to all. Don’t miss out—register now and be part of the experience!
            </p>

            {/* Video Section with Lazy Loading and Scroll Zoom Effect */}
            <motion.div
                className="mt-8 flex justify-center"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Suspense
                    fallback={
                        <motion.div
                            className="w-full max-w-4xl h-64 bg-gray-300 animate-pulse rounded-lg shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    }
                >
                    <LazyVideo />
                </Suspense>
            </motion.div>
        </div>
    );
};

export default Overview;
