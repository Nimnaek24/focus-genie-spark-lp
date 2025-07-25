import React, { useState } from "react";

const TeamCard = ({ name, role, image, github, linkedin, email }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSocial = () => setIsActive(!isActive);

  // Define gradient colors based on team member
  const getGradientColors = (name) => {
    if (name.includes("Nimna")) {
      return { from: "#3b82f6", to: "#8b5cf6" }; // Blue to Purple
    } else if (name.includes("Ashinshanee")) {
      return { from: "#ec4899", to: "#f97316" }; // Pink to Orange
    } else if (name.includes("Isuri")) {
      return { from: "#10b981", to: "#06b6d4" }; // Green to Cyan
    }
    return { from: "#6366f1", to: "#8b5cf6" }; // Default: Indigo to Purple
  };

  const { from: gradientFrom, to: gradientTo } = getGradientColors(name);

  return (
    <div className="relative group">
      {/* Outer glow effect */}
      <div 
        className="absolute -inset-1 rounded-3xl opacity-75 group-hover:opacity-100 blur-xl transition-all duration-300"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      ></div>
      
      {/* Main card */}
      <div className="relative w-[370px] h-[400px] bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl flex flex-col justify-between items-center transition-all duration-300 hover:scale-[1.02] border border-white/10">
        
        {/* Profile Image with animated gradient border */}
        <div className="relative">
          <div 
            className="absolute -inset-1 rounded-full blur-md opacity-75 animate-pulse"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            }}
          ></div>
          <div 
            className="relative w-32 h-32 mb-4 rounded-full p-[3px] bg-gradient-to-br"
            style={{
              backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full border-2 border-slate-800"
            />
          </div>
        </div>

        {/* Name & Role */}
        <div className="text-center mb-6">
          <h3 
            className="text-2xl font-bold text-transparent bg-clip-text mb-2"
            style={{
              backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            {name}
          </h3>
          <p className="text-slate-300 text-sm font-medium tracking-wide px-6" style={{ fontSize: "16px", lineHeight: "1.5" }}>{role}</p>
        </div>

        {/* Toggle & Social Section */}
        <div className="flex items-center justify-center space-x-4">
          {/* Toggle Button */}
          <button
            onClick={toggleSocial}
            className="relative group/btn"
          >
            <div 
              className="absolute inset-0 rounded-full blur-md opacity-60 group-hover/btn:opacity-80 transition-opacity"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
              }}
            ></div>
            <div 
              className="relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
              }}
            >
              <svg
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  isActive ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </button>

          {/* Text or Social Icons */}
          <div className="relative h-12 flex items-center overflow-hidden w-44">
            {/* Initial Text */}
            <span
              className={`absolute left-0 right-0 text-sm font-semibold transition-all duration-500 ${
                isActive ? "opacity-0 translate-x-12" : "opacity-100 translate-x-0"
              }`}
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Add My Socials
            </span>

            {/* Social Icons */}
            <div
              className={`flex space-x-3 absolute transition-all duration-500 ${
                isActive
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              {/* GitHub */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/social"
              >
                <div 
                  className="absolute inset-0 rounded-full blur-sm opacity-60 group-hover/social:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                ></div>
                <div 
                  className="relative w-10 h-10 flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform duration-200 border border-white/20"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/social"
              >
                <div 
                  className="absolute inset-0 rounded-full blur-sm opacity-60 group-hover/social:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                ></div>
                <div 
                  className="relative w-10 h-10 flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform duration-200 border border-white/20"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </a>

              {/* Email */}
              <a
                href={email}
                className="relative group/social"
              >
                <div 
                  className="absolute inset-0 rounded-full blur-sm opacity-60 group-hover/social:opacity-100 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                ></div>
                <div 
                  className="relative w-10 h-10 flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform duration-200 border border-white/20"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;