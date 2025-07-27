import React, { useState } from "react";

const TeamCard = ({ name, role, image, github, linkedin, email }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

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
      {/* Main card */}
      <div
        className="relative w-[380px] h-[460px] bg-white dark:bg-slate-900 p-8 shadow-lg flex flex-col items-center transition-all duration-300 hover:scale-[1.02] border border-gray-200 dark:border-slate-700"
        style={{
          borderRadius: "2rem 2rem 2rem 2rem",
          clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)",
        }}
      >
        {/* Profile Image */}
        <div className="relative mb-6 group/image">
          <div
            className="absolute -inset-2 rounded-full blur-lg opacity-20 group-hover/image:opacity-40 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            }}
          ></div>

          <div
            className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-br shadow-lg transform group-hover/image:scale-105 transition-all duration-500"
            style={{
              backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            <div className="w-full h-full rounded-full p-1 bg-white dark:bg-slate-800">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-full shadow-md transform group-hover/image:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-2 right-4 w-2 h-2 rounded-full opacity-70 animate-bounce"
              style={{
                background: gradientFrom,
                animationDelay: "0.5s",
              }}
            ></div>
            <div
              className="absolute bottom-6 left-2 w-1.5 h-1.5 rounded-full opacity-60 animate-bounce"
              style={{
                background: gradientTo,
                animationDelay: "1s",
              }}
            ></div>
            <div
              className="absolute top-8 left-6 w-1 h-1 rounded-full opacity-50 animate-bounce"
              style={{
                background: `linear-gradient(45deg, ${gradientFrom}, ${gradientTo})`,
                animationDelay: "1.5s",
              }}
            ></div>
          </div>
        </div>

        {/* Name & Role */}
        <div className="text-center mb-8 space-y-2">
          <h3
            className="text-2xl font-bold text-transparent bg-clip-text leading-tight"
            style={{
              backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
            }}
          >
            {name}
          </h3>
          <p className="text-gray-600 dark:text-slate-400 text-sm font-medium tracking-wide px-4 leading-relaxed">
            {role}
          </p>
        </div>

        {/* Connect Button & Social Icons */}
        <div className="relative w-full flex items-center justify-center min-h-[60px]">
          {/* Connect Button */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
              showSocials
                ? "opacity-0 scale-75 pointer-events-none"
                : "opacity-100 scale-100 pointer-events-auto"
            }`}
          >
            <button
              onClick={() => setShowSocials(true)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative transition-transform duration-300 hover:scale-105"
              style={{ borderRadius: "2rem" }}
            >
              <div
                className="inline-flex items-center gap-3 px-8 py-3 text-sm font-medium transition-all duration-500 border shadow-lg"
                style={{
                  background: isHovered
                    ? `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
                    : `linear-gradient(135deg, ${gradientFrom}15, ${gradientTo}15)`,
                  color: isHovered ? "white" : gradientFrom,
                  borderColor: `${gradientFrom}40`,
                  borderRadius: "2rem",
                }}
              >
                <svg
                  className="w-5 h-5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="tracking-wide">Connect With Me</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Social Icons */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${
              showSocials
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-75 pointer-events-none"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* GitHub */}
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative overflow-hidden transform hover:scale-110 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}20, ${gradientTo}20)`,
                    borderColor: `${gradientFrom}40`,
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: gradientFrom }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative overflow-hidden transform hover:scale-110 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}20, ${gradientTo}20)`,
                    borderColor: `${gradientFrom}40`,
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: gradientFrom }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="group/social relative overflow-hidden transform hover:scale-110 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg border"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}20, ${gradientTo}20)`,
                    borderColor: `${gradientFrom}40`,
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: gradientFrom }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </a>

              {/* Close/Back Button */}
              <button
                onClick={() => setShowSocials(false)}
                className="group/social relative overflow-hidden transform hover:scale-110 transition-all duration-300 ml-2"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg border hover:bg-red-50 dark:hover:bg-red-950 transition-colors duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}10, ${gradientTo}10)`,
                    borderColor: `${gradientFrom}30`,
                  }}
                >
                  <svg
                    className="w-5 h-5 text-gray-500 hover:text-red-500 transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
