// import React from "react";
// import "./Experience.css";
// import PlaysImage from "../assets/900-plays.png"
// import PeakImage from "../assets/Optimized.png"
// import Transition from "../assets/Smooth.png"
// import AdvertisersImage from "../assets/Limited.png"


// const experiences = [
//   {
//     // icon: "▶️",
//      img: PlaysImage,
//     text: "900 plays/day",
   
//   },
//   {
//     // icon: "⚡",
//     img: PeakImage,
//     text: "Optimized peak-hour display",

//   },
//   {
//     // icon: "🎞️",
//     img:Transition,
//     text: "Smooth transitions & vivid playback",
//   },
//   {
//     // icon: "🕒",
//     img:AdvertisersImage,
//     text: "Limited advertiser count for maximum exposure",
//   },
// ];

// const Experience = () => {
//   return (
//     <section className="experience">
//       <h2 className="experience-title">THE EXPERIENCE</h2>
//       <div className="experience-cards">
//         {experiences.map((item, index) => (
//           <div className="experience-card" key={index}>
//             <div className="experience-icon">{item.icon}</div>
//             <p className="experience-text">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from "react";
import "./Experience.css";
import PlaysImage from "../assets/900-plays.png";
import PeakImage from "../assets/Optimized.png";
import Transition from "../assets/Smooth.png";
import AdvertisersImage from "../assets/Limited.png";

const experiences = [
  {
    name: "900 plays/day",
    img: PlaysImage,
    
  },
  {name: "Optimized peak-hour display",
    img: PeakImage,
    
  },
  {
    name: "Smooth transitions & vivid playback",
    img: Transition,
    
  },
  {
    name: "Limited advertiser count for maximum exposure",
    img: AdvertisersImage,
    
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience-title">THE EXPERIENCE</h2>
      <div className="experience-cards">
        {experiences.map((item, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-icon">
              <img src={item.img} alt="experience" />
            </div>
            <p className="experience-name">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
