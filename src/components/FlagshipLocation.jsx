import React from "react";

const FlagshipLocation = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white px-6 md:px-12 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">OUR FLAGSHIP LOCATION</h2>
        <p className="text-teal-400 text-xl italic">VAZHUTHACAUD JUNCTION</p>
      </div>

      {/* Image or Map Placeholder */}
      <div className="w-full h-64 md:h-96 bg-gray-400 rounded-2xl mb-12"></div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="border border-teal-400 p-4 rounded-xl text-center text-sm">
          Central 4-way junction with corporate & institutional traffic
        </div>
        <div className="border border-teal-400 p-4 rounded-xl text-center text-sm">
          Long dwell time from traffic signals
        </div>
        <div className="border border-teal-400 p-4 rounded-xl text-center text-sm">
          Clean sightlines from every direction
        </div>
        <div className="border border-teal-400 p-4 rounded-xl text-center text-sm">
          Daily repeat exposure to high-income commuters
        </div>
      </div>
    </section>
  );
};

export default FlagshipLocation;
