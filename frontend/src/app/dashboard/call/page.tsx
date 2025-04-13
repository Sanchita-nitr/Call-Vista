// app/dashboard/page.tsx

"use client";

import { motion } from "framer-motion";

export default function DashboardPage() {
  const summaryData = [
    { title: "Total Calls", value: "245", icon: "📞" },
    { title: "Avg. Sentiment", value: "Positive 😊", icon: "🎭" },
    { title: "Hold Time", value: "1m 30s", icon: "⏱️" },
    { title: "Dead Air", value: "20s", icon: "🔇" },
  ];

  const recentCalls = [
    { id: "001", agent: "ab", sentiment: "Negative", duration: "7m 12s" },
    { id: "002", agent: "cd", sentiment: "Positive", duration: "5m 40s" },
    { id: "003", agent: "ef", sentiment: "Neutral", duration: "6m 05s" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {summaryData.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-md p-6 rounded-xl border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="text-2xl">{item.icon}</div>
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            <p className="text-xl font-bold mt-1">{item.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Calls Table */}
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <h2 className="text-xl font-semibold mb-4">📁 Recent Calls</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="pb-2">Call ID</th>
              <th className="pb-2">Agent</th>
              <th className="pb-2">Sentiment</th>
              <th className="pb-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            {recentCalls.map((call) => (
              <tr key={call.id} className="border-t text-sm">
                <td className="py-2">{call.id}</td>
                <td>{call.agent}</td>
                <td
                  className={`font-semibold ${
                    call.sentiment === "Positive"
                      ? "text-green-600"
                      : call.sentiment === "Negative"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {call.sentiment}
                </td>
                <td>{call.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
