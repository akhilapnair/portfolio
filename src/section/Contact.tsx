import { GENERAL_INFO, socialImgs } from "../constants";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };
  return (
    // <footer className="text-center pb-5" id="contact">
    //   <div className="container">
    //     <p className="text-lg">Have a project in mind?</p>
    //     <a
    //       href={`mailto:${GENERAL_INFO.email}`}
    //       className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
    //     >
    //       {GENERAL_INFO.email}
    //     </a>

    //     <div className="">
    //       <a
    //         href=""
    //         target="_blank"
    //         className="leading-none text-muted-foreground hover:underline hover:text-white"
    //       >
    //         Design & built by Akhila Prabhakaran Nair
    //       </a>
    //       <div className="socials">
    //         {socialImgs.map((socialImg, index) => (
    //           <div key={index} className="icon">
    //             <img src={socialImg.imgPath} alt="social icon" />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <section
      id="contact"
      className="flex-center container mt-20 pointer-events-auto"
    >
      <SectionTitle title="Contact" className="mb-20" />

      <div className="w-full h-full md:px-10 px-5">
        <div className="grid grid-cols-1 xl:grid-cols-10 gap-4 mt-16">
          <div className="xl:col-span-4"></div>
          <div className="xl:col-span-6 min-h-96">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
