// 'use client'
// import React, { useState } from 'react'

// const CallDetails = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');

//   return (
//     <div className="relative">
//       <div className="mt-10 flex items-center space-x-6">
//         <div className="flex -space-x-2 overflow-hidden">
//           {[1, 2, 3, 4].map((i) => (
//             <img 
//               key={i}
//               className="inline-block h-8 w-8 rounded-full ring-2 ring-white" 
//               src={`/api/placeholder/40/${30+i}`} 
//               alt={`Customer ${i}`} 
//             />
//           ))}
//         </div>
//         <p className="text-sm text-blue-100">
//           <span className="font-bold text-white">500+</span> companies trust VoiceInsights
//         </p>
//       </div>
      
//       <div className="bg-white rounded-lg shadow-2xl overflow-hidden mt-6">
//         <div className="bg-gray-100 px-4 py-3 flex items-center border-b">
//           <div className="flex space-x-2">
//             <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//             <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//             <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//           </div>
//           <div className="ml-4 text-sm font-medium text-gray-700">
//             Call Analytics Dashboard
//           </div>
//         </div>
//         <div className="p-4">
//           <div className="flex mb-4">
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-t-lg ${activeTab === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
//               onClick={() => setActiveTab('dashboard')}
//             >
//               Dashboard
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-t-lg ${activeTab === 'transcript' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
//               onClick={() => setActiveTab('transcript')}
//             >
//               Transcript
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-t-lg ${activeTab === 'analytics' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
//               onClick={() => setActiveTab('analytics')}
//             >
//               Analytics
//             </button>
//           </div>
        
//           {activeTab === 'dashboard' && (
//             <div>
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div className="bg-blue-50 p-3 rounded-lg">
//                   <div className="text-xs text-gray-500 mb-1">Sentiment Score</div>
//                   <div className="text-2xl font-bold text-blue-700">78%</div>
//                   <div className="text-xs text-green-600">↑ 12% from last week</div>
//                 </div>
//                 <div className="bg-orange-50 p-3 rounded-lg">
//                   <div className="text-xs text-gray-500 mb-1">Avg Hold Time</div>
//                   <div className="text-2xl font-bold text-orange-700">1:24</div>
//                   <div className="text-xs text-red-600">↑ 8% from last week</div>
//                 </div>
//                 <div className="bg-green-50 p-3 rounded-lg">
//                   <div className="text-xs text-gray-500 mb-1">Resolution Rate</div>
//                   <div className="text-2xl font-bold text-green-700">92%</div>
//                   <div className="text-xs text-green-600">↑ 5% from last week</div>
//                 </div>
//                 <div className="bg-red-50 p-3 rounded-lg">
//                   <div className="text-xs text-gray-500 mb-1">Dead Air</div>
//                   <div className="text-2xl font-bold text-red-700">7.2s</div>
//                   <div className="text-xs text-green-600">↓ 3% from last week</div>
//                 </div>
//               </div>
              
//               <div className="bg-gray-50 p-3 rounded-lg">
//                 <div className="text-xs text-gray-500 mb-2">Language Distribution</div>
//                 <div className="h-24 flex items-end space-x-2">
//                   <div className="bg-blue-600 w-12 h-16 rounded-t-md"></div>
//                   <div className="bg-blue-500 w-12 h-24 rounded-t-md"></div>
//                   <div className="bg-blue-400 w-12 h-12 rounded-t-md"></div>
//                   <div className="bg-blue-300 w-12 h-8 rounded-t-md"></div>
//                   <div className="bg-blue-200 w-12 h-6 rounded-t-md"></div>
//                 </div>
//                 <div className="flex text-xs text-gray-600 mt-2 justify-between">
//                   <span>English</span>
//                   <span>Hindi</span>
//                   <span>Tamil</span>
//                   <span>Telugu</span>
//                   <span>Others</span>
//                 </div>
//               </div>
//             </div>
//           )}
          
//           {activeTab === 'transcript' && (
//             <div className="space-y-3 h-64 overflow-y-auto text-sm">
//               <div className="flex">
//                 <div className="flex-shrink-0 bg-blue-100 text-blue-700 font-medium rounded px-2 py-1 text-xs">Agent</div>
//                 <div className="ml-2">Good morning, thank you for calling VoiceInsights support. How may I assist you today?</div>
//               </div>
//               <div className="flex">
//                 <div className="flex-shrink-0 bg-green-100 text-green-700 font-medium rounded px-2 py-1 text-xs">Customer</div>
//                 <div className="ml-2">Hi, I'm having trouble with the language settings in your application. I need to set it up for Hindi calls as well.</div>
//               </div>
//               <div className="flex">
//                 <div className="flex-shrink-0 bg-blue-100 text-blue-700 font-medium rounded px-2 py-1 text-xs">Agent</div>
//                 <div className="ml-2">I'd be happy to help you with that. To configure multilingual settings, you'll need to access the admin dashboard. Can you tell me if you're currently logged in as an administrator?</div>
//               </div>
//               <div className="flex">
//                 <div className="flex-shrink-0 bg-green-100 text-green-700 font-medium rounded px-2 py-1 text-xs">Customer</div>
//                 <div className="ml-2">Yes, I am logged in as an admin. I can see the dashboard now.</div>
//               </div>
//               <div className="flex">
//                 <div className="flex-shrink-0 bg-blue-100 text-blue-700 font-medium rounded px-2 py-1 text-xs">Agent</div>
//                 <div className="ml-2">Great! Now, please navigate to Settings and then Language Configuration. You'll see a list of available languages. You can enable Hindi by toggling the switch next to it.</div>
//               </div>
//               <div className="flex">
//                 <div className="flex-shrink-0 bg-amber-100 text-amber-700 font-medium rounded px-2 py-1 text-xs">System</div>
//                 <div className="ml-2">[Hold Time: 35 seconds]</div>
//               </div>
//               <div className="flex">
//                 <div className="flex-shrink-0 bg-green-100 text-green-700 font-medium rounded px-2 py-1 text-xs">Customer</div>
//                 <div className="ml-2">I found it and enabled Hindi. Do I need to reboot the system or anything?</div>
//               </div>
//             </div>
//           )}
          
//           {activeTab === 'analytics' && (
//             <div className="h-64 space-y-3">
//               <div className="bg-gray-50 p-3 rounded-lg">
//                 <div className="text-xs text-gray-500 mb-1">Sentiment Trend</div>
//                 <div className="h-20 flex items-center">
//                   <div className="flex-1 h-1 bg-gray-200 relative">
//                     <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full"></div>
//                     <div className="absolute top-0 left-3/4 h-6 w-6 -mt-3 -ml-3 bg-white rounded-full shadow-md flex items-center justify-center">
//                       <div className="h-4 w-4 bg-green-500 rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-gray-50 p-3 rounded-lg">
//                 <div className="text-xs text-gray-500 mb-1">Speaking Time</div>
//                 <div className="h-8 bg-gray-200 rounded-full overflow-hidden">
//                   <div className="h-full bg-blue-600 w-3/5 rounded-full relative">
//                     <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs text-white font-medium">Agent (60%)</span>
//                     <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-gray-700 font-medium">Customer (40%)</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 gap-3">
//                 <div className="bg-gray-50 p-3 rounded-lg">
//                   <div className="text-xs text-gray-500 mb-1">Dead Air Instances</div>
//                   <div className="flex gap-1 mt-2">
//                     <div className="bg-red-200 h-4 w-8"></div>
//                     <div className="bg-red-300 h-4 w-4"></div>
//                     <div className="bg-red-400 h-4 w-6"></div>
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded-lg">
//                   <div className="text-xs text-gray-500 mb-1">Overtalk Events</div>
//                   <div className="flex gap-1 mt-2">
//                     <div className="bg-orange-200 h-4 w-3"></div>
//                     <div className="bg-orange-300 h-4 w-8"></div>
//                     <div className="bg-orange-400 h-4 w-2"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CallDetails