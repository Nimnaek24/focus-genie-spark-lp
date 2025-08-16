import React from "react";
import TeamCard from "./TeamCard";

const teamMembers = [
  {
    name: "Nimna Ekanayake",
    role: "Co-Founder, Software & Game Developer, Tech Lead",
    image: "images/Nimna2.jpg",
    github: "https://github.com/Nimnaek24",
    linkedin: "https://www.linkedin.com/in/nimna-ekanayake-b07181310/",
    email: "mailto:nimnaek24@gmail.com",
  },
  {
    name: "Ashinshanee Indrachapa",
    role: "Co-Founder, Project Manager, Software & Game Developer, Tech Lead",
    image: "images/Ashi.jpg",
    github: "https://github.com/Ashinshanee02",
    linkedin: "https://www.linkedin.com/in/ashiathukorala",
    email: "mailto:ashinshaneeindrachapa02@gmail.com",
  },
  {
    name: "Isuri Perera",
    role: "Data Scientist, AI/ML Engineer, Backend Developer",
    image: "images/isuri.jpg",
    github: "https://github.com/isuriperera1",
    linkedin: "https://www.linkedin.com/in/isuri-perera1/",
    email: "mailto:isuripe@gmail.com",
  },
];

const TeamSection = () => {
  return (
    <section
      id="team"
      className="py-16 bg-gray-50 dark:bg-gray-900 lg:pt-[400px] pb-[150px]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-[70px] dark:text-white">
          NovaEd Labs Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
