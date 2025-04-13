'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();
  return (
    <section className="">
      {/* Hero Section */}
      <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative h-[600px] md:h-[800px] w-full"
>

        <Image
          src="/call-center-agents.webp"
          alt="Call center analytics"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b4513] to-[#722600b0] flex items-center py-20">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-7xl mx-auto px-6 md:px-12 w-full"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#fff8dc] mb-4 max-w-3xl">
              Advanced Call Analytics for Multilingual Call Centers
            </h1>
            <p className="text-xl text-[#fff8dc]/90 mb-8 max-w-2xl">
              Transform your customer interactions with AI-powered conversation intelligence that works across multiple languages and accents.
            </p>
            <div className="flex flex-wrap gap-4">
            
              <motion.button 
              onClick={() => { router.push('/dashboard') }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#fff8dc]/10 backdrop-blur-sm hover:bg-[#fff8dc]/20 text-[#fff8dc] font-semibold rounded-md border border-[#fff8dc]/30 transition duration-300"
              >
                View Analytics Platform
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
