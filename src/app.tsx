import APIcon from "./components/apicon";
import Intro from "./components/Intro";
import ParticleBackground from "./components/particle-animation";

const App = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <main className="relative z-10 flex h-screen ">
        <section className="w-screen min-h-screen flex flex-col  px-6 py-10 text-white text-center">
          <div className="mb-8 transition duration-300 text-white hover:text-oceanSky">
            <APIcon size={60} color="#ffffff" />
          </div>
          <Intro />
        </section>
      </main>
    </div>
  );
};

export default App;
