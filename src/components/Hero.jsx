import { useTypewriter, Cursor } from "react-simple-typewriter";
const Hero = () => {
  const [text] = useTypewriter({
    words: ["ADHD", "AUTISM", "DYSLEXIA"],
    loop: true,
    typeSpeed: 200,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });

  return (
    <div id="home" className="relative h-screen w-full ">
      <img
        src="images/HeroImage.png"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          FocusGenie for
          <span
            className="font-bold ml-5"
            style={{
              background:
                "linear-gradient(to right, #afdae0, #ffabcc, #ccafe0)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {text}
          </span>
          <Cursor />
        </h1>
        <p className="mt-4 text-lg md:text-xl leading-relaxed md:leading-relaxed w-3/4">
          Welcome to FocusGenie! A revolutionary educational platform designed
          to support preschoolers with ADHD, Autism, and Dyslexia through
          gamified learning and advanced insights.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition duration-300">
            Subscribe Now
          </button>
      </div>
    </div>
  );
};

export default Hero;
