// import React from 'react';
// import { Link } from 'react-router-dom';
// const Hero = () => {
//   return (
//     <div className="relative bg-gradient-to-bl from-black via-gray-900 to-black text-white overflow-hidden min-h-screen px-4 md:px-12 py-16">
//       {/* Navbar */}
//       <div className="flex justify-between items-center mb-12">
//         <div className="text-3xl font-bold text-white">
//           <span className="text-[#00FFD1]">TURB</span>O <span className="text-sm font-light">ADS</span>
//         </div>
//         <div className="hidden md:flex gap-8 items-center text-white font-medium">
//           <a href="#package">Media Package</a>
//           <a href="#studio">Our Studio</a>
//           <a href="#services">Our Services</a>
//           <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-gray-200">
//             📞 Contact Us
//           </button>
//         </div>
//       </div>

//       {/* Hero Content */}
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
//         <div>
//           <h1 className="text-5xl font-bold mb-4">TURBO ADS</h1>
//           <h2 className="text-xl md:text-2xl text-teal-400 font-medium mb-8">
//             Premium Outdoor Advertising and Visual Media
//           </h2>

//           {/* Tagline Box */}
//           <div className="bg-white bg-opacity-5 rounded-lg p-6 mb-6 max-w-lg border border-gray-700">
//             <h3 className="text-2xl font-bold mb-2">OWN ATTENTION.<br />OWN THE CITY.</h3>
//             <p className="text-sm text-gray-300 mb-4">
//               TURBO ADS delivers high-frequency LED billboard advertising at strategic urban junctions —
//               starting with our flagship screen at Vazhuthacaud Junction, Trivandrum.
//             </p>
//             <div className="flex gap-4 flex-wrap">
//               <button className="bg-[#00FFD1] text-black px-6 py-2 rounded-full hover:bg-[#00e5ba]">Book a Slot</button>
//               <button className="border border-[#00FFD1] text-[#00FFD1] px-6 py-2 rounded-full hover:bg-[#00FFD1] hover:text-black">
//                 Request a Quote
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="flex flex-col gap-4">
//           <div className="border border-[#00FFD1] rounded-full px-6 py-3 text-center">
//             900+ plays/day
//           </div>
//           <div className="border border-[#00FFD1] rounded-full px-6 py-3 text-center">
//             20-second slots
//           </div>
//           <div className="border border-[#00FFD1] rounded-full px-6 py-3 text-center">
//             Prime footfall visibility
//           </div>
//         </div>
//       </div>

//       {/* Scroll To Top */}
//       <div className="fixed bottom-6 right-6">
//         <button className="bg-[#00FFD1] text-black p-3 rounded-full shadow-lg hover:scale-110 transition">
//           ↑
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React from 'react';
// import { Link } from 'react-router-dom'; // ✅ import Link

// const Hero = () => {
//   return (
//     <div className="relative bg-gradient-to-bl from-black via-gray-900 to-black text-white overflow-hidden min-h-screen px-4 md:px-12 py-16">
//       {/* Navbar */}
//       <div className="flex justify-between items-center mb-12">
//         <div className="text-3xl font-bold text-white">
//           <span className="text-[#00FFD1]">TURB</span>O <span className="text-sm font-light">ADS</span>
//         </div>
//         <div className="hidden md:flex gap-8 items-center text-white font-medium">
//           <Link to="/media-package">Media Package</Link>
//           <Link to="/about">Our Studio</Link>
//           <Link to="/services">Our Services</Link>
//           <Link to="/contact">
//             <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-gray-200">
//               📞 Contact Us
//             </button>
//           </Link>
//         </div>
//       </div>

//       {/* Hero Content */}
//       <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
//         <div>
//           <h1 className="text-5xl font-bold mb-4">TURBO ADS</h1>
//           <h2 className="text-xl md:text-2xl text-teal-400 font-medium mb-8">
//             Premium Outdoor Advertising and Visual Media
//           </h2>

//           {/* Tagline Box */}
//           <div className="bg-white bg-opacity-5 rounded-lg p-6 mb-6 max-w-lg border border-gray-700">
//             <h3 className="text-2xl font-bold mb-2">OWN ATTENTION.<br />OWN THE CITY.</h3>
//             <p className="text-sm text-gray-300 mb-4">
//               TURBO ADS delivers high-frequency LED billboard advertising at strategic urban junctions —
//               starting with our flagship screen at Vazhuthacaud Junction, Trivandrum.
//             </p>
//             <div className="flex gap-4 flex-wrap">
//               <button className="bg-[#00FFD1] text-black px-6 py-2 rounded-full hover:bg-[#00e5ba]">Book a Slot</button>
//               <button className="border border-[#00FFD1] text-[#00FFD1] px-6 py-2 rounded-full hover:bg-[#00FFD1] hover:text-black">
//                 Request a Quote
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="flex flex-col gap-4">
//           <div className="border border-[#00FFD1] rounded-full px-6 py-3 text-center">
//             900+ plays/day
//           </div>
//           <div className="border border-[#00FFD1] rounded-full px-6 py-3 text-center">
//             20-second slots
//           </div>
//           <div className="border border-[#00FFD1] rounded-full px-6 py-3 text-center">
//             Prime footfall visibility
//           </div>
//         </div>
//       </div>

//       {/* Scroll To Top */}
//       <div className="fixed bottom-6 right-6">
//         <button className="bg-[#00FFD1] text-black p-3 rounded-full shadow-lg hover:scale-110 transition">
//           ↑
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import homebackground from "../assets/homebackground.png";
import Logo from "../assets/logo.png";
import React from 'react';

const Hero = () => {
    return (
  <div
    className="relative bg-gradient-to-bl from-black via-gray-900 to-black text-white overflow-hidden min-h-[100dvh]"
  >
     {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${homebackground})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-black via-gray-900 to-black opacity-80 z-10"></div>
      
    {/* CONTENT WRAPPER for responsive centering */}
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-14">
      
      {/* Navbar */}
      <div className="flex justify-between items-center mb-12">
        <div className="text-3xl font-bold text-white">
          <img src={Logo} alt="Turbo Logo" className="w-28 md:w-40 h-auto object-contain" />
        </div>
        <div className="hidden md:flex gap-8 items-center text-white font-medium">
          <a href="#media" className="hover:text-[#00FFD1] transition">Media Package</a>
          <a href="#studios" className="hover:text-[#00FFD1] transition">Our Studio</a>
          <a href="#services" className="hover:text-[#00FFD1] transition">Our Services</a>
          <a href="#contact">
            <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-gray-200 transition">
              📞 Contact Us
            </button>
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-5xl font-bold mb-4">TURBO ADS</h1>
          <h2 className="text-xl md:text-2xl text-teal-400 font-medium mb-8">
            Premium Outdoor Advertising and Visual Media
          </h2>

          {/* Tagline Box */}
          <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-lg p-6 mb-6 max-w-lg border border-gray-400">
            <h3 className="text-2xl font-bold mb-2">OWN ATTENTION.<br />OWN THE CITY.</h3>
            <p className="text-sm text-gray-100 mb-4">
              TURBO ADS delivers high-frequency LED billboard advertising at strategic urban junctions — starting with our flagship screen at Vazhuthacaud Junction, Trivandrum.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-[#00FFD1] text-black px-6 py-2 rounded-full hover:bg-[#00e5ba]">Book a Slot</button>
              <button className="border border-[#00FFD1] text-[#00FFD1] px-6 py-2 rounded-full hover:bg-[#00FFD1] hover:text-black">
                Request a Quote
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-4 mt-11">
          <div className="border border-[#00FFD1] backdrop-blur-md rounded-full px-6 py-3 text-center">900+ plays/day</div>
          <div className="border border-[#00FFD1] backdrop-blur-md rounded-full px-6 py-3 text-center">20-second slots</div>
          <div className="border border-[#00FFD1] backdrop-blur-md rounded-full px-6 py-3 text-center">Prime footfall visibility</div>
        </div>
      </div>
    </div>

    {/* Scroll To Top */}
    <div className="fixed bottom-6 right-6">
      <a href="#">
        <button className="bg-[#00FFD1] text-black p-3 rounded-full shadow-lg hover:scale-110 transition">
          ↑
        </button>
      </a>
    </div>
  </div>
);
};

export default Hero;  
