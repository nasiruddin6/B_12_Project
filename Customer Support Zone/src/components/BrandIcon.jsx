function BrandIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <text x="2" y="38" fill="#7dd3fc" fontSize="22" fontFamily="monospace" fontWeight="600">
        &lt;
      </text>
      <path
        d="M22 18 L42 18 L48 32 L42 46 L22 46 L16 32 Z"
        stroke="#7dd3fc"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M22 18 L32 32 L22 46 M42 18 L32 32 L42 46"
        stroke="#7dd3fc"
        strokeWidth="1"
        opacity="0.7"
      />
      <text x="46" y="38" fill="#7dd3fc" fontSize="22" fontFamily="monospace" fontWeight="600">
        /&gt;
      </text>
    </svg>
  );
}

export default BrandIcon;
