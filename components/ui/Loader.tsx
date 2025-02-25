"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent pointer-events-none">
      {/* Spinner */}
      <motion.div
        className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      <div className="mt-4 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-purple-500 rounded-full"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Text */}
      <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
