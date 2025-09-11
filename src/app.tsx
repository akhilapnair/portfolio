import Intro from "./section/Intro";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/Particle-animation";
import Aboutme from "./section/Aboutme";
import Experience from "./section/Experience";
import Skills from "./section/skills";
import Contact from "./section/contact";

const App = () => {
  return (
 
      <div className="relative min-h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <Navbar />
        {/* <main className="relative pt-10 z-10 flex min-h-[calc(100vh-180px)] "> */}
          <section className=" w-[780px]flex flex-col  px-6 text-white text-center">
            <Intro />
            <Aboutme />
            <Experience />
            <Skills />
            <Contact />
          </section>
        {/* </main> */}
      </div>
  );
};

export default App;
