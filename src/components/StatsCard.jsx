import React from "react";

const StatsCard = () => {
  return (
    <div className="flex items-center justify-center bg-black">
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
        
       
        <div className="bg-black rounded-2xl px-10 py-12 flex flex-col items-center justify-center border border-gray-700">
          
          <h1 className="text-4xl font-bold text-white">50+</h1>
          <p className="text-gray-400 mt-2">Trusted Clients</p>
        
        </div>

      </div>
    </div>
  );
};

export default StatsCard;