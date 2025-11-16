import { GENERAL_INFO, socialImgs } from "../constants";
// import { socialImgs } from "../constants";
;
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex-center container mt-20 pointer-events-auto"
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title=" "
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="container">
          <a
            href={`mailto:${GENERAL_INFO.email}`}
            className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
          >
            {GENERAL_INFO.email}
          </a>
          <div className="socials">
            {socialImgs.map((socialImg, index) => (
              <div key={index} className="icon">
                <img src={socialImg.imgPath} alt="social icon" />
              </div>
            ))}
          </div>
          <div className="pt-1 pb-5">
            <a
              href="https://github.com/akhilapnair"
              target="_blank"
              className="leading-none text-gray-500 hover:underline hover:text-white"
            >
              Design & built by Akhila Prabhakaran Nair
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
