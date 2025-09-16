import { useRef } from "react";
import DecoderName from "../components/Decoder-text";
import SectionTitle from "../components/SectionTitle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Aboutme = () => {
  const container = useRef<HTMLDivElement | null>(null);
     useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );
  
  return (
    <section
      id="about-me"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="container flex items-start space-y-4 flex-col md:col-span-7">
        <div className="flex items-start">
          <SectionTitle title="" />
          <DecoderName text="Hi There" className="text-gray-300" />
        </div>

        <div
        ref={container}
         className="text-lg text-left text-muted-foreground max-w-[450px] space-y-4">
          <p className="slide-up-and-fade">
            Hi I’m Akhila Prabhakaran Nair, currently living in Sweden. I’m a
            frontend web developer passionate about transforming ideas into
            creative, user-friendly solutions. I have extensive experience
            building React and Angular applications, delivering scalable and
            intuitive systems across healthcare, travel, and enterprise domains.
            I love bringing concepts to life through code, creating digital
            experiences that are smooth, engaging, and enjoyable for users.
          </p>
          <p className="slide-up-and-fade">
            By prioritizing performance, accessibility, and responsiveness, I
            strive to deliver experiences that not only engage users but also
            drive tangible results.I focus on doing things well and learning
            from each project. When I'm not coding, I enjoy reading tech blogs
            and trying out the latest design trends. These hobbies keep me
            inspired and help me stay sharp in my work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
