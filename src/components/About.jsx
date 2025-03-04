const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 pt-[130px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between relative">
          {/* Blurred Gradient Circle */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500 to-pink-500 blur-3xl opacity-30 ml-[25px]"
            style={{
              top: "50%",
              left: "10%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>

          {/* Image on the Left */}
          <div className="flex-shrink-0 mb-8 md:mb-0 md:w-1/3 relative">
            <img
              src="images/AboutGenie.png" // Change the image path here
              alt="Genie Image"
              className="w-auto h-[400px] object-cover z-10 relative"
            />
          </div>

          {/* Text Content on the Right */}
          <div className="md:w-2/3 md:pl-16 text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h1>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Empower Every Child’s Learning Journey
            </p>
            <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
              At FocusGenie, our mission is to create a magical, inclusive
              learning experience that caters to the unique needs of children
              with Attention-Based Disorders. By blending gamified learning,
              AI-driven insights, and a supportive community, we aim to empower
              children, support parents, and foster collaboration among
              educators and consultants.
            </p>
            <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
