import Intro from "./section/Intro";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/ParticleAnimation";
import Aboutme from "./section/Aboutme";
import Experience from "./section/Experience";
import Skills from "./section/skills";
import Contact from "./section/Contact";

const App = () => {
  return (
 
      <div className="relative min-h-screen bg-black overflow-hidden">
          <ParticleBackground />
        <Navbar />
          <section className=" pt-[180px] w-[780px]flex flex-col  px-3 text-white text-center">
            <Intro />
            <Aboutme />
            <Experience />
            <Skills />
            <Contact />
          </section>
      </div>
  );
};

export default App;
