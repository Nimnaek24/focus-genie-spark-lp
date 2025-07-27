import React, { useState } from "react";
import {
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiFacebookBoxFill,
  RiMailFill,
  RiSendPlaneFill,
} from "react-icons/ri";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setEmail("");
    // Add your subscription logic here
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Main Content Container */}
        <div className="bg-white/70 dark:bg-slate-800/30 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/30">
          
          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-400/20 dark:to-pink-400/20 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600 dark:text-slate-300 tracking-wide">
                STAY CONNECTED
              </span>
            </div>
            
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent mb-6 leading-tight">
              Stay Updated with Us
            </h2>
            
            <p className="text-gray-600 dark:text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Be the first to know about our launch, new features, and exciting updates. 
              Join our mailing list for exclusive insights and resources!
            </p>
          </div>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
            <div className="relative group">
              {/* Input Container */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
                
                <div className="relative flex items-center bg-white/90 dark:bg-slate-700/50 backdrop-blur-sm border-2 border-white/50 dark:border-slate-600/50 rounded-full p-2 focus-within:border-purple-400 dark:focus-within:border-purple-400 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 shadow-lg">
                    <RiMailFill className="text-white text-xl" />
                  </div>
                  
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 text-lg focus:outline-none px-4"
                    required
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitting || !email}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe Now</span>
                        <RiSendPlaneFill className={`text-lg transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mb-12 text-sm text-gray-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No spam, ever</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Unsubscribe anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Privacy protected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer placed directly inside the full-width container */}
      <footer className="mt-16 px-6">
        {/* Divider Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-600 to-transparent mb-12"></div>
        
        {/* Footer Content */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Side - Company Info */}
          <div className="text-center lg:text-left">
            <p className="text-lg text-gray-700 dark:text-slate-300 mb-2">
              Built with ❤️ by{" "}
              <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Team NovaEd Labs
              </span>
            </p>
            <p className="text-gray-600 dark:text-slate-400">
              All rights reserved. © {new Date().getFullYear()}
            </p>
          </div>

          {/* Right Side - Social Media */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <p className="text-gray-700 dark:text-slate-300 text-lg font-medium">
              Connect with us
            </p>
            
            <div className="flex gap-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/sparkvoyage"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-12 h-12 bg-white/70 dark:bg-slate-700/50 backdrop-blur-sm border border-blue-200/50 dark:border-blue-400/30 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300 group-hover:scale-110 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <RiLinkedinBoxFill className="relative z-10 text-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/focusgenie_?igsh=NHRiM3FuM3hqejZt"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-12 h-12 bg-white/70 dark:bg-slate-700/50 backdrop-blur-sm border border-pink-200/50 dark:border-pink-400/30 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:border-pink-400 dark:hover:border-pink-400 transition-all duration-300 group-hover:scale-110 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <RiInstagramFill className="relative z-10 text-xl text-pink-500 dark:text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61570566926438&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-12 h-12 bg-white/70 dark:bg-slate-700/50 backdrop-blur-sm border border-blue-200/50 dark:border-blue-400/30 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group-hover:scale-110 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <RiFacebookBoxFill className="relative z-10 text-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sparkvoyage2@gmail.com"
                className="group relative"
              >
                <div className="w-12 h-12 bg-white/70 dark:bg-slate-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-400/30 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-300 group-hover:scale-110 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <RiMailFill className="relative z-10 text-xl text-gray-600 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;
