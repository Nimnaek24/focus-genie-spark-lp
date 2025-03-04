import {
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiFacebookBoxFill,
  RiMailFill,
} from "react-icons/ri";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Stay Updated with Us
        </h2>
        {/* Description */}
        <p className="text-gray-600 text-lg mb-8">
          Be the first to know about our launch, new features, and exciting
          updates. Join our mailing list for exclusive insights and resources!
        </p>
        {/* Subscription Form */}
        <div className="flex justify-center">
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-full border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400 w-80 text-gray-700 dark:bg-gray-700 dark:text-white"
            />
            <button className="absolute top-1/2 right-3 transform -translate-y-1/2">
              <i className="ri-mail-line text-pink-500 text-xl"></i>
            </button>
          </div>
        </div>
        {/* Subscribe Button */}
        <div className="mt-6">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition duration-300 ">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600">
        <p>
          Built by <span className="font-semibold">Team FocusGenie</span>
        </p>
        <p>All rights reserved. © {new Date().getFullYear()}</p>
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://www.linkedin.com/company/focusgenie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinBoxFill className="text-3xl text-blue-700 hover:text-blue-800 transition" />
          </a>
          <a
            href="https://www.instagram.com/focusgenie_?igsh=NHRiM3FuM3hqejZt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramFill className="text-3xl text-pink-500 hover:text-pink-600 transition" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61570566926438&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFacebookBoxFill className="text-3xl text-blue-600 hover:text-blue-700 transition" />
          </a>
          <a href="mailto:focusgenie6@gmail.com">
            <RiMailFill className="text-3xl text-gray-800 hover:text-gray-900 transition" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;
