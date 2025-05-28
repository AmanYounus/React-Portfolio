import "./assets/starry.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/contact";
import Weather from "./components/weather";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-neutral-300 antialiased selection:text-cyan-900">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-[#0b0b2b] via-[#1b2735] to-[#090a0f]" />

      {/* Star layer */}
      <div className="stars fixed top-0 left-0 w-full h-full -z-10" />
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />
      <div className="shooting-star" />

      {/* Main content */}
      <div className="container mx-auto px-8 relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Weather />
      </div>
    </div>
  );
};

export default App;
