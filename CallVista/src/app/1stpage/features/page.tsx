"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  FiActivity,
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiMessageSquare,
  FiMic,
  FiUsers,
  FiVolume2,
} from "react-icons/fi"; // Adjust the import path based on your icon library
const Features = () => {
  const stats = useMemo(
    () => [
      { id: 1, value: 98, label: "Transcription Accuracy", symbol: "%" },
      { id: 2, value: 70, label: "Reduced Analysis Time", symbol: "%" },
      { id: 3, value: 12, label: "Supported Languages", symbol: "+" },
      {
        id: 4,
        value: 30,
        label: "Improved First Call Resolution",
        symbol: "%",
      },
    ],
    []
  );

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) => {
          if (count < stats[i].value) {
            return count + Math.ceil(stats[i].value / 30);
          } else {
            return stats[i].value;
          }
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [stats]);

  const features = [
    {
      icon: <FiMessageSquare className="h-10 w-10 text-[#8b3313]" />,
      title: "Call Transcription",
      description:
        "Convert voice conversations to text with high accuracy for both English and Hindi languages.",
    },
    {
      icon: <FiUsers className="h-10 w-10 text-[#8b3313]" />,
      title: "Speaker Identification",
      description:
        "Automatically distinguish between agent and customer voices for better conversation analysis.",
    },
    {
      icon: <FiHeart className="h-10 w-10 text-[#8b3313]" />,
      title: "Sentiment Analysis",
      description:
        "Detect emotions and sentiments throughout calls to identify customer satisfaction levels.",
    },
    {
      icon: <FiClock className="h-10 w-10 text-[#8b3313]" />,
      title: "Hold Time Analysis",
      description:
        "Track and analyze hold durations to optimize customer waiting experience.",
    },
    {
      icon: <FiVolume2 className="h-10 w-10 text-[#8b3313]" />,
      title: "Dead Air Detection",
      description:
        "Identify awkward silences and gaps in conversation that may indicate confusion or issues.",
    },
    {
      icon: <FiActivity className="h-10 w-10 text-[#8b3313]" />,
      title: "Agent Overtalk",
      description:
        "Measure instances where agents talk over customers to improve conversation quality.",
    },
  ];

  const integrations = [
    { name: "Genesys", logo: "/genesys.png" },
    { name: "Microsoft Teams", logo: "/msteam.jpg" },
    { name: "AWS Connect", logo: "/aws.png" },
  ];
  return (
    <div>
      <section id="features" className="py-20 bg-[#e2dbbe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#8b3313] font-serif sm:text-4xl mb-4">
              Comprehensive Call Center Analytics
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-[#b53900]">
              A complete suite of tools to analyze, understand, and optimize
              your multilingual customer interactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#a53502] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#b8410a]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className=" mb-16 mt-16 bg-gradient-to-r from-[#fff8dc] to-indigo-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="md:grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-[#c69d8a] text-[#632e00] font-semibold mb-4">
                  Featured
                </div>
                <h3 className="text-2xl font-bold text-[#8b3313] mb-4">
                  Multilingual Conversation Intelligence
                </h3>
                <p className="text-lg text-[#a53502] mb-6">
                  Our platform uses specialized acoustic models trained on
                  Indian speech patterns and accents to provide superior
                  transcription accuracy for multiple Indian languages.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Language identification and code-switching detection",
                    "Dialect-specific acoustic modeling",
                    "Cultural context awareness for sentiment analysis",
                    "Custom vocabulary for industry-specific terms",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheckCircle className="h-5 w-5 text-[#8b3313] font-bold mr-2 flex-shrink-0 mt-1" />
                      <span className="text-[#b8410a]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <button className="px-6 py-3 bg-[#8b3313] text-white rounded-lg font-medium hover:bg-[#a53502] transition shadow">
                    Learn More About Our Technology
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#8b3313] to-[#a53502] p-8 md:p-12 flex items-center justify-center">
                <div className="max-w-sm">
                  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">
                        <FiMic className="h-12 w-12 text-[#8b3313]" />
                      </div>
                      <div>
                        <h4 className="text-[#8b3313] font-bold text-lg">
                          Language Detection
                        </h4>
                        <p className="text-[#a53502] text-sm">
                          Automatically identifies the spoken language
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#a53502]">Hindi</span>
                          <span className="text-[#b8410a]">85%</span>
                        </div>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                          <div
                            className="bg-[#20b2aa] h-2 rounded-full"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#a53502]">English</span>
                          <span className="text-[#b8410a]">10%</span>
                        </div>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                          <div
                            className="bg-[#0000cd] h-2 rounded-full"
                            style={{ width: "10%" }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#a53502]">Tamil</span>
                          <span className="text-[#b8410a]">5%</span>
                        </div>
                        <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                          <div
                            className="bg-[#f4a460] h-2 rounded-full"
                            style={{ width: "5%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                      <p className="text-[#a53502] text-sm mb-2">
                        Code-switching detected
                      </p>
                      <div className="flex items-center text-[#b8410a] text-xs">
                        <FiClock className="h-3 w-3 mr-1" />
                        <span>Updated in real-time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Counter Section */}
      <div className="bg-[#fff8dc] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-[#8b4513]/10 backdrop-blur-sm rounded-lg border border-[#8b4513]/20"
              >
                <div className="flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-[#8b4513]">
                    {counts[index]}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-[#8b4513c0]">
                    {stat.symbol}
                  </span>
                </div>
                <p className="text-[#8b4513] mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#fff8dc] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#8b3313] text-sm font-semibold mb-6">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {integrations.map((partner, index) => (
              <div key={index} className="h-10">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="h-full border object-contain"
                  width={100} // You can adjust as needed
                  height={100} // You can adjust as needed
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
