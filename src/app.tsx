import APIcon from "./components/APIcon";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import ParticleBackground from "./components/Particle-animation";

const App = () => {
  return (
 
      <div className="relative min-h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <Navbar />
        <main className="relative z-10 flex min-h-[calc(100vh-124px)] ">
          <section className=" flex flex-col  px-6 text-white text-center">
            <Intro />
          </section>
        </main>
      </div>
  );
};

export default App;
