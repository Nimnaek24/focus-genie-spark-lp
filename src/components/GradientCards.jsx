import "./styles.css";

const GradientCards = () => {
  return (
    <div id="features" className="container dark:bg-gray-900">
      <div className="card__container dark:bg-gray-900">
        {[
          {
            title: "Personalized Learning",
            description:
              "FocusGenie tailors games and activities to meet the unique needs of children with ADHD, Autism, and Dyslexia, ensuring every child feels supported and engaged.",
            icon: "ri-user-heart-line",
            hueClass: "",
          },
          {
            title: "Gamified Learning",
            description:
              "Through gamified learning, FocusGenie turns skill-building into an exciting adventure, keeping children motivated and eager to learn.",
            icon: "ri-gamepad-line",
            hueClass: "card__orange",
          },
          {
            title: "Real-Time Monitoring",
            description:
              "Our AI-driven monitoring helps track your child’s progress, identify strengths and challenges, and adapt activities dynamically for effective results.",
            icon: "ri-pulse-line",
            hueClass: "card__green",
          },
          {
            title: "IoT Integration",
            description:
              "With optional IoT tools, FocusGenie helps optimize noise, lighting, and temperature, creating the perfect space for your child to focus and thrive.",
            icon: "ri-wifi-line",
            hueClass: "card__red",
          },
          {
            title: "Parent Dashboard",
            description:
              "Join a community of parents and caregivers who understand the journey, share experiences, and access valuable resources like expert webinars and forums.",
            icon: "ri-dashboard-line",
            hueClass: "card__yellow",
          },
          {
            title: "Community Portal",
            description:
              "Easily access detailed progress reports, collaborate with educators and healthcare providers, and make informed decisions about your child’s development.",
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
