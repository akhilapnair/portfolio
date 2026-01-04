const Button = ({ text, className}: any) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        window.open(
           '/Resume_Akhila_P_Nair.pdf',
      '_blank',
      'noopener,noreferrer'
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
