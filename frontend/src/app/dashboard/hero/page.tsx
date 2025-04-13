'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)" />
          </svg>
          <defs>
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M0,0 L10,0 L10,10 L0,10 Z" fill="none" stroke="white" strokeWidth="0.5" />
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
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-block px-4 py-1 mb-6 bg-blue-400 bg-opacity-20 rounded-full"
              >
                <span className="text-blue-100 font-medium text-sm">AI-POWERED INSIGHTS</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
              >
                <span className="block">Decode Every</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                  Conversation
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg text-blue-100 mb-8 max-w-lg"
              >
                Transform multilingual call center interactions into actionable intelligence with our AI-powered analytics platform. Supports Hindi, English, and 10+ Indian languages.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-700/30 transition"
                >
                  Start Free Trial
                </motion.button>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold rounded-xl transition flex items-center gap-2"
                  href="#demo-video"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                  </svg>
                  Watch Demo
                </motion.a>
              </motion.div>
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
                    src="/Call-center-analytics-dashboard.webp"
                    alt="AI Call Analytics Dashboard"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating element 1: Analytics card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl w-48 md:w-64 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">Sentiment Score</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full mb-1">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: '82%' }}></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Positive</span>
                  <span className="font-medium text-gray-900">82%</span>
                </div>
              </motion.div>
              
              {/* Floating element 2: Language detection */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white"
              >
                <div className="flex items-center gap-2 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-blue-600" viewBox="0 0 16 16">
                    <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"/>
                    <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14v-.659h-1.98c.138-.5.195-.922.195-1.259 0-.305-.053-.667-.138-1.03H14v-.7h-1.789c-.785-1.23-1.941-1.887-3.287-1.887-1.301 0-2.414.611-3.242 1.886H2.953v.697h1.167c-.099.382-.152.744-.152 1.031 0 .312.055.733.176 1.261H2.953v.659H4.28c.393 1.228.966 2.154 1.715 2.781.281-.239.581-.459.9-.659-.661-.45-1.192-1.137-1.59-2.122H7.5v-1.032zm2.096-2.38c-.068-.437-.154-.863-.279-1.27H13.5v.667h-3.266zm-.128-1.968h3.394v-.697h-2.073c-.17-.41-.459-.853-.868-1.23-.359.322-.615.675-.795 1.007.473.033.871.126 1.212.251-.362.292-.671.636-.926 1.032a9.88 9.88 0 0 1-.941.666zM8.705 4.063c-.332-.498-.648-.85-.951-1.059-.318.207-.639.56-.979 1.058h1.93zm-.517 2.984H5.147c-.069-.526-.104-.926-.104-1.203 0-.338.068-.73.195-1.189h2.949c.147.464.222.857.222 1.189 0 .271-.036.67-.104 1.203z"/>
                  </svg>
                  <span className="font-semibold text-gray-800">Hindi-English Code-Switching</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="font-medium">Detected • </span>
                  <span className="ml-1 text-gray-500">Live transcription active</span>
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