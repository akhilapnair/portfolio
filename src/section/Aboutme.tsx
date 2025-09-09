import { Fragment } from "react/jsx-runtime";
import DecoderName from "../components/Decoder-text";

const Aboutme = () => {
  return (
    <section
      id="about"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="container md:col-span-7">
        <DecoderName text="Hi There" className="text-gray-300" />

        <div className="text-lg text-muted-foreground max-w-[450px]">
          <p className="slide-up-and-fade">
            I&apos;m a frontend web developer dedicated to turning ideas into
            creative solutions. I specialize in creating seamless and intuitive
            user experiences.
          </p>
          <p className="mt-3 slide-up-and-fade">
            My approach focuses on creating scalable, high-performing solutions
            tailored to both user needs and business objectives. By prioritizing
            performance, accessibility, and responsiveness, I strive to deliver
            experiences that not only engage users but also drive tangible
            results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
