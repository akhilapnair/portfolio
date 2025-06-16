import ParticleBackground from "./components/particle-animation";

const App = () => {
  return (
    <div className="relative z-10 min-h-screen bg-black">
      <main className="relative z-10 text-white">
        <ParticleBackground />
      </main>
    </div>
  );
};

export default App;
