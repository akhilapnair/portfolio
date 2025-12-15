
const APIcon = ({ size = 64, className = "" }) => (
  <svg
  className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="100" height="100" fill="black" />
    {/* Letter A Shape */}
    <path d="M10 80 L30 20 L50 80 Z" fill="currentColor" />
    {/* Letter P Shape */}
    <path d="M50 80 L50 20 Q70 20 70 40 Q70 60 50 60 Z" fill="currentColor" />
  </svg>
);

export default APIcon;
