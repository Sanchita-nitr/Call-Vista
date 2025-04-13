'use client'


import Image from "next/image";
import { motion } from "framer-motion";
import { FiUsers, FiMessageSquare, FiHeart, FiMic } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Call Transcription",
      description: "Convert voice conversations to text with high accuracy for both English and Hindi languages.",
      image: "/calltranscription.jpg",
      icon: <FiMessageSquare className="text-3xl text-[#fff8dc]" />
    },
    {
      id: 2,
      title: "Speaker Identification",
      description: "Automatically distinguish between agent and customer voices for better conversation analysis.",
      image: "/identification.jpg",
      icon: <FiUsers className="text-3xl text-[#fff8dc]" />
    },
    {
      id: 3,
      title: "Sentiment Analysis",
      description: "Detect emotions and sentiments throughout calls to identify customer satisfaction levels.",
      image: "/sentiment1.webp",
      icon: <FiHeart className="text-3xl text-[#fff8dc]" />
    },
    {
      id: 4,
      title: "Conversation Intelligence",
      description: "Gain deeper insights with AI-powered analytics that identify trends and issues.",
      image: "/intelligence.jpg",
      icon: <FiMic className="text-3xl text-[#fff8dc]" />
    }
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="">
     

      {/* Services Section */}
      <div className="py-20  bg-[#fff8dc]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#201E1F] mb-4">Our Call Analytics Services</h2>
            <p className="text-lg text-[#fff8dc] max-w-3xl mx-auto">
              Leverage AI-powered conversation intelligence to transform raw call data into actionable insights
              that improve agent performance and customer satisfaction.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-[#ffcaa4] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-72">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#201E1F]/80 to-transparent flex items-end">
                    <div className="p-6">
                      <span>{service.icon}</span>
                      <h3 className="text-2xl font-bold text-[#fff8dc] mt-2">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#8b4513] font-semibold">{service.description}</p>
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="mt-4 text-[#fff8dc] hover:text-[#201E1F] font-medium flex items-center gap-2 group"
                  >
                    Learn more 
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      fill="currentColor" 
                      className="transition-transform group-hover:translate-x-1" 
                      viewBox="0 0 16 16"
                    >
                      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
