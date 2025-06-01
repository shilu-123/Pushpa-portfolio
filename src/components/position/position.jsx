import React from "react";

const positions = [
  {
    id: 1,
    title: "Web master",
    organization: " for the  OIST ACM Student Chapter",
    duration: "  3FEB– Present",
    description:
      "Leading the ACM chapter by organizing events, technical workshops, and fostering a strong developer community on campus.",
  },
 {
  id: 2,
  title: "Membership Chair",
  organization: "for the OIST ACM-W Student Chapter",
  duration: "8 March – Present",
  description: "Leading the ACM chapter by organizing events, technical workshops, and fostering a strong developer community on campus"
},

  {
    id: 3,
    title: "Event Coordinator",
    organization: "in many events, OIST",
    duration: "Jan 2024 ",
    description:
      "Coordinated the technical and logistics aspects of events during OIST events,",
  },
  
];

const Position = () => {
  return (
    <section id="positions" className="px-[12vw] py-20 bg-gray-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">MY POSITIONS @ OIST BHOPAL</h2>
      <div className="space-y-8">
        {positions.map((pos) => (
          <div
            key={pos.id}
            className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-purple-500/30 transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-purple-400">{pos.title}</h3>
            <p className="text-gray-300 italic">{pos.organization}</p>
            <p className="text-sm text-gray-400 mb-2">{pos.duration}</p>
            <p className="text-gray-200">{pos.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Position;
