import "./styles.css";

const GradientCards = () => {
  return (
    <div id="features" className="container dark:bg-gray-900">
      <div className="card__container dark:bg-gray-900">
        {[
          {
            title: "AI-Powered Virtual Companion (Spark)",
            description:
              "An intelligent virtual character that adapts interactions in real-time based on child engagement patterns using GPT-4 and Text-to-Speech technology.",
            icon: "ri-user-heart-line",
            hueClass: "",
          },
          {
            title: "Gamified Learning Adventures",
            description:
              "Interactive Unity-based adventure games specifically designed for preschool children with ADHD to maintain engagement while building cognitive skills.",
            icon: "ri-gamepad-line",
            hueClass: "card__orange",
          },
          {
            title: "IoT Wearable Device Integration",
            description:
              "Nordic nRF52-based wearable that captures heart rate, sleep patterns, and activity data via Bluetooth to correlate with gameplay performance.",
            icon: "ri-pulse-line",
            hueClass: "card__green",
          },
          {
            title: "Magic Crystal Ball (IoT Sensory Tool)",
            description:
              "A tangible device with LED lights, pressure sensors, and vibration feedback that helps children with emotional regulation and calming.",
            icon: "ri-wifi-line",
            hueClass: "card__red",
          },
          {
            title: "Real-Time Adaptive Learning System",
            description:
              "Proprietary algorithm that dynamically adjusts educational content based on gameplay performance, physiological signals, and behavioral patterns.",
            icon: "ri-dashboard-line",
            hueClass: "card__yellow",
          },
          {
            title: "Comprehensive Parental Dashboard",
            description:
              "Mobile app that provides parents with actionable insights on their child's progress, sleep quality, activity levels, and personalized intervention recommendations.",
            icon: "ri-community-line",
            hueClass: "card__purple",
          },
        ].map((card, index) => (
          <article
            key={index}
            className={`card__article ${card.hueClass} dark:card__dark dark:bg-gray-800`}
          >
            <div className="card__scale-1 dark:bg-gray-700"></div>
            <div className="card__scale-2 dark:bg-gray-800"></div>
            <div className="card__shape-1">
              <div className="card__shape-2"></div>
              <div className="card__shape-3">
                <i className={`${card.icon} card__icon dark:text-white`}></i>
              </div>
            </div>
            <div className="card__data">
              <h2 className="card__title dark:text-white">{card.title}</h2>
              <p className="card__description dark:text-gray-300">
                {card.description}
              </p>
              <a
                href="#"
                className="card__button dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700"
              >
                Continue learning
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default GradientCards;
