
const ComingSoonSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 text-black py-16 px-8 text-center pt-[110px]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 dark:text-white">
          The Magic Awaits
        </h2>
        <p className="text-lg mb-8 dark:text-white">
          Get ready for an enchanting adventure! FocusGenie is coming soon to
          bring magic and learning to life.
        </p>
        <div className="relative w-full h-0 pb-[56.25%] mb-8">
          {/* Placeholder for video */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="videos/FocusGenie_Preview.mp4"
            title="FocusGenie Teaser"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-md italic dark:text-white">
          *Stay tuned for the official launch and explore the magic of
          FocusGenie soon!
        </p>
      </div>
    </section>
  );
};

export default ComingSoonSection;
