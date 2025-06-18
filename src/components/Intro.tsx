export default function Intro() {
  return (
    <header className="flex flex-col items-center justify-center h-[calc(100vh-64px)] px-4 text-center">
      <div>
       <h1 className="text-sm uppercase tracking-wide font-semibold text-gray-300 mb-4 name" id="intro-title" data-visible="true">
      <span >
       <span aria-hidden="true" className="flex justify-start gap-0.5 text-lightgrey">
  {"Akhila  Prabhakarn  Nair".split("").map((char, idx) => (
    <span key={idx}>
      {char}
    </span>
          ))}
        </span>
      </span>
    </h1>

        <h2 className="text-7xl sm:text-8xl font-extrabold leading-tight">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>FRONTEND</span>
            <span className="h-px bg-gray-600 flex-1 min-w-[50px] hidden sm:block"></span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 mt-3 justify-center">
            <span className="text-gray-500 text-5xl sm:text-6xl">+</span>
            <span>DEVELOPER</span>
          </div>
        </h2>
      </div>
    </header>
  );
}
