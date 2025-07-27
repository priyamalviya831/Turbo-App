// // import './App.css';
// import Hero from './components/Hero';
// import FlagshipLocation from "./components/FlagshipLocation";
// import Experience from './components/Experience';
// import Clientele from './components/Clientele';
// import MediaPackage from './components/MediaPackage';
// import VideoProduction from './components/VideoProduction';
// import Services from './components/Services';
// import EventPitchSection from './components/EventPitchSection';

// function App() {
//   return (
//    <div>
//   <Hero />
//   <FlagshipLocation />
//   <Experience/>
//   <Clientele/>
//   <MediaPackage/>
//   <VideoProduction/>
//   <Services/>
//   <EventPitchSection/>
  
//    </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import EventPitchSection from './components/EventPitchSection';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import MediaPackage from './components/MediaPackage';
// import Services from './components/Services';

// function App() {
//   return (
//     <Router>
  
//       <Routes>
//          <Route path="/" element={<Home />} />
//         {/* <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} /> */}
//         <Route path="/media-package" element={<MediaPackage />} />
// <Route path="/about" element={<About />} />
// <Route path="/services" element={<Services />} />
// <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import MediaPackage from './components/MediaPackage';
// import OurStudio from './components/Experience'; // or whatever component it is
import Services from './components/Services';
// 
import Clientele from './components/Clientele';
import Experience from './components/Experience';
import VideoProduction from './components/VideoProduction';
import FlagshipLocation from './components/FlagshipLocation';
import EventPitchSection from './components/EventPitchSection'



export default function App() {
  return (
    <div className="scroll-smooth overflow-x-hidden">
      <Hero />
     
      <section id="flagshiplocation" className="scroll-mt-32">
        <FlagshipLocation />
      </section>

      <section id="studio" className="scroll-mt-32">
        <Experience />
      </section>
        
        <section id="clientele" className="scroll-mt-32">
        <Clientele />
      </section>
       <section id="media" className="scroll-mt-32">
        <MediaPackage />
      </section>

       <section id="studios" className="scroll-mt-32">
        <VideoProduction />
      </section>
       

      <section id="services" className="scroll-mt-32">
        <Services />
      </section>
      <section id="event" className="scroll-mt-32">
        <EventPitchSection />
      </section>

    </div>
  );
}
