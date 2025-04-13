"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#a24206] via-[#b53900] to-[#5e220c] py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)" />
          </svg>
          <defs>
            <pattern
              id="grid-pattern"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,0 L10,0 L10,10 L0,10 Z"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
        </div>
        {/* Animated floating circles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-5"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 8 + 6,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-1 ">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-[#ff914d] via-[#ff7a3c] to-[#952800] backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-block px-4 py-1 mb-6 bg-[#fff8dc] bg-opacity-20 rounded-full"
              >
                <span className="text-[#b53900] font-serif font-medium text-sm">
                  INTELLIGENCE BEYOND TRANSCRIPTS
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              >
                <span className="block">From Voice to Vision:</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#923800] via-[#b53900] to-[#5e220c]">
                  Smart Call Insights
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg text-[#fff8dc] mb-8 max-w-lg"
              >
                Transform multilingual call center interactions into actionable
                intelligence with our AI-powered analytics platform. Supports
                Hindi, English, and 10+ Indian languages.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              ></motion.div>
            </div>
          </motion.div>

          {/* Right Animation/Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20">
                <div className="relative h-64 sm:h-80 md:h-96">
                  <Image
                    src="/Screenshot 2025-04-13 at 8.37.21 PM.png"
                    alt="AI Call Analytics Dashboard"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-6 -left-6  rounded-2xl p-4 shadow-xl w-48 md:w-64 border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center"></div>
                </div>

                <div className="flex justify-between text-sm"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-white"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-semibold text-gray-800"></span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
