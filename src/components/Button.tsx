const Button = ({ text, className, id }: any) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        window.open(
          "https://docs.google.com/document/d/1ZChqu2rURWHLGZM7-yJEWloSFJmsZzbv/edit?usp=sharing&ouid=105486007470840248750&rtpof=true&sd=true",
          "_blank"
        );
      }}
      className="cta-wrapper"
    >
      <div className={`cta-button group ${className ?? ""}`}>
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
