import About from "./components/About"
import ContactSection from "./components/Contact"
import GradientCards from "./components/GradientCards"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import ComingSoonSection from "./components/Preview"
import PricingSection from "./components/Pricing"
import TeamSection from "./components/Team"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <h2 className="text-center text-5xl font-bold py-8 dark:bg-gray-900 dark:text-white">
        Features
      </h2>
      <GradientCards />
      <ComingSoonSection />
      <PricingSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}

export default App