"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  interface Analysis {
    sentiment: "Positive" | "Negative" | "Neutral";
    emotions: Record<string, number>;
    keywords: string[];
    duration: string;
    deadAir: string;
    transcription: string;
  }

  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  const handleUpload = async () => {
    setUploading(true);

    // Simulate API response delay with mock data
    setTimeout(() => {
      setAnalysis({
        sentiment: "Positive",
        emotions: {
          happy: 0.65,
          neutral: 0.25,
          angry: 0.05,
          sad: 0.05,
        },
        keywords: ["support", "help", "resolution", "satisfaction"],
        duration: "3m 42s",
        deadAir: "18s",
        transcription:
          "Hello, this is customer support. How can I help you today? I understand your concern. Let me check your account details. I'm happy to report that we can resolve this issue immediately...",
      });
      setUploading(false);
    }, 1500);
  };

  const summaryData = [
    { title: "Total Calls", value: "245", icon: "📞" },
    { title: "Avg. Sentiment", value: "Positive 😊", icon: "🎭" },
    { title: "Hold Time", value: "1m 30s", icon: "⏱️" },
    { title: "Dead Air", value: "20s", icon: "🔇" },
  ];

  const recentCalls = [
    { id: "001", agent: "John Smith", sentiment: "Negative", duration: "7m 12s" },
    { id: "002", agent: "Emma Davis", sentiment: "Positive", duration: "5m 40s" },
    { id: "003", agent: "Michael Lee", sentiment: "Neutral", duration: "6m 05s" },
  ];

  const colors = {
    primary: {
      light: "#ff914d",
      main: "#b53900",
      dark: "#5e220c",
      accent: "#a24206",
    },
    secondary: {
      light: "#fff8dc",
      main: "#ffd700",
      accent: "#952800",
    },
    emotion: {
      happy: "#ff914d",
      neutral: "#b8a642",
      angry: "#b53900",
      sad: "#5e220c",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8dc] to-[#ffe4c4] text-gray-900 p-6">
      {/* Background patterns */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 opacity-30">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-[#a24206] to-[#b53900]"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(80px)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 mb-2 bg-[#b53900]/10 rounded-full"
            >
              <span className="text-[#b53900] font-medium text-sm tracking-wide">
                VOICE INTELLIGENCE
              </span>
            </motion.div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a24206] via-[#b53900] to-[#5e220c]">
                Call Analytics
              </span>
              <span className="text-xl">📊</span>
            </h1>
            <p className="text-[#b53900] max-w-xl">
              Transform your customer conversations into valuable insights
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="px-3 py-1 bg-[#b53900]/10 rounded-full text-sm text-[#b53900]">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Upload */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 p-6 bg-white shadow-lg rounded-2xl border border-[#b53900]/10 max-w-lg relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a24206] via-[#b53900] to-[#5e220c]"></div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#ff914d] to-[#b53900] opacity-10 rounded-full transform translate-x-8 -translate-y-8"></div>
          
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">🎤</span>
            <span>Upload Call Recording</span>
          </h2>
          
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#b53900]/30 transition-colors">
            <input
              type="file"
              id="file-upload"
              accept="audio/*"
              onChange={(e) => {
                if (e.target.files) {
                  setSelectedFile(e.target.files[0]);
                }
              }}
              className="hidden"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center justify-center gap-3"
            >
              <div className="w-16 h-16 bg-[#b53900]/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#b53900]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <div>
                {selectedFile ? (
                  <span className="font-medium text-[#b53900]">{selectedFile.name}</span>
                ) : (
                  <span className="text-gray-500">Click to select an audio file</span>
                )}
              </div>
            </label>
          </div>

          <div className="mt-6 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleUpload}
              disabled={!selectedFile && !uploading}
              className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow-md transition-all ${
                !selectedFile && !uploading
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#a24206] to-[#b53900] text-white hover:from-[#b53900] hover:to-[#a24206]"
              }`}
            >
              {uploading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Analyzing Audio...</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>Analyze Audio</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Analysis Data */}
        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-[#b53900] mt-6 mb-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5e220c] via-[#b53900] to-[#ff914d]"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#ff914d]/20 to-[#b53900]/10 rounded-full"></div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>📋</span>
              <span>Analysis Results</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {/* Sentiment */}
              <div className="bg-gradient-to-br from-white to-[#fff8dc]/30 p-5 rounded-2xl border border-[#b53900]/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#ff914d]/10 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
                
                <h4 className="font-bold mb-3 text-[#5e220c]">Sentiment Score</h4>
                <div className="flex items-center justify-center h-36">
                  <div
                    className="w-32 h-32 rounded-full flex items-center justify-center relative"
                    style={{
                      background: `conic-gradient(${colors.primary.light} ${
                        analysis.sentiment === "Positive" ? "270deg" : 
                        analysis.sentiment === "Negative" ? "90deg" : "180deg"
                      }, #f3f4f6 0)`,
                    }}
                  >
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
                      <span className="text-4xl">
                        {analysis.sentiment === "Positive"
                          ? "😊"
                          : analysis.sentiment === "Negative"
                          ? "😟"
                          : "😐"}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-center mt-4 font-bold text-lg text-[#b53900]">{analysis.sentiment}</p>
              </div>

              {/* Emotions */}
              <div className="bg-gradient-to-br from-white to-[#fff8dc]/30 p-5 rounded-2xl border border-[#b53900]/10 shadow-sm">
                <h4 className="font-bold mb-3 text-[#5e220c]">Emotion Analysis</h4>
                <div className="h-40 flex flex-col justify-center">
                  {Object.entries(analysis.emotions).map(([emotion, value], index) => (
                    <div key={emotion} className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="capitalize">{emotion}</span>
                        <span>{Math.round(value * 100)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${value * 100}%` }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: colors.emotion[emotion as keyof typeof colors.emotion]
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Keywords */}
              <div className="bg-gradient-to-br from-white to-[#fff8dc]/30 p-5 rounded-2xl border border-[#b53900]/10 shadow-sm">
                <h4 className="font-bold mb-3 text-[#5e220c]">Key Terms</h4>
                <div className="h-40 flex flex-wrap content-center justify-center gap-2">
                  {analysis.keywords.map((keyword, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      className="px-3 py-1 bg-gradient-to-r from-[#a24206]/10 to-[#b53900]/10 text-[#b53900] rounded-lg text-sm border border-[#b53900]/20"
                    >
                      {keyword}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Time Metrics */}
              <div className="bg-gradient-to-br from-white to-[#fff8dc] p-5 rounded-2xl border border-[#b53900]/10 shadow-sm">
                <h4 className="font-bold mb-3 text-[#5e220c]">Time Analysis</h4>
                <div className="h-40 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Call Duration</span>
                    <span className="font-bold text-[#b53900]">{analysis.duration}</span>
                  </div>
                  <div className="w-full h-5 bg-gray-100 rounded-lg overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-[#a24206] to-[#b53900]" 
                    />
                  </div>
                  <div className="flex justify-between items-center mt-6 mb-3">
                    <span className="font-medium">Dead Air</span>
                    <span className="font-bold text-[#b53900]">{analysis.deadAir}</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-lg overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "15%" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-[#ff914d] to-[#b53900]" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Transcription */}
            <div className="mt-8">
              <h4 className="font-bold mb-3 text-[#5e220c] flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Conversation Transcript</span>
              </h4>
              <div className="bg-gradient-to-br from-white to-[#fff8dc] p-4 rounded-xl border border-[#b53900]/10 max-h-40 overflow-y-auto shadow-sm">
                <p className="text-sm whitespace-pre-wrap leading-relaxed text-gray-700">
                  {analysis.transcription}
                </p>
              </div>
            </div>

            {/* Optional Raw JSON */}
            <details className="mt-6">
              <summary className="cursor-pointer text-sm text-[#b53900]/70 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>Show raw analysis data</span>
              </summary>
              <pre className="text-xs bg-gray-50 p-3 mt-2 rounded overflow-x-auto border border-[#b53900]/10">
                {JSON.stringify(analysis, null, 2)}
              </pre>
            </details>
          </motion.div>
        )}

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {summaryData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-gradient-to-l from-[#b53900] to-[#ff5c10] p-5 rounded-2xl border border-[#b53900] shadow-md relative overflow-hidden"
            >
              <div 
                className="absolute top-0 right-0 w-16 h-16 rounded-full opacity-20"
                style={{
                  background: `radial-gradient(circle at center, ${colors.primary.light}, transparent 70%)`,
                  transform: "translate(30%, -30%)"
                }}
              ></div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-xl p-3 bg-gradient-to-br from-[#a24206]/10 to-[#b53900]/10">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-[#fff8dc] mb-1">{item.title}</h2>
                  <p className="text-xl font-bold text-[#5e220c]">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

  
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-[#b53900]/10 mb-10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff914d] via-[#b53900] to-[#5e220c]"></div>
          
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span>📁</span>
              <span>Recent Call Recordings</span>
            </h2>
        
          </div>
          
          <div className="overflow-x-auto ">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="pb-3 text-[#b53900] font-medium text-md">Call ID</th>
                  <th className="pb-3 text-[#b53900] font-medium text-md">Agent</th>
                  <th className="pb-3 text-[#b53900] font-medium text-md">Sentiment</th>
                  <th className="pb-3 text-[#b53900] font-medium text-md">Duration</th>
                 
                </tr>
              </thead>
              <tbody>
                {recentCalls.map((call, idx) => (
                  <motion.tr 
                    key={call.id} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                    className="border-t border-gray-100"
                  >
                    <td className="py-3">
                      <span className="font-medium text-[#5e220c]">{call.id}</span>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-8 h-8 rounded-full bg-[#b53900]/10 flex items-center justify-center text-sm font-medium text-[#b53900]"
                        >
                          {call.agent.split(" ").map(part => part[0]).join("")}
                        </span>
                        <span>{call.agent}</span>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`px-2 py-1 rounded-md text-xs font-medium  ${
                          call.sentiment === "Positive"
                            ? "bg-green-100 text-green-700"
                            : call.sentiment === "Negative"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {call.sentiment}
                      </span>
                    </td>
                    <td>{call.duration}</td>
                    <td>
                   
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}