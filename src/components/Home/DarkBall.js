import React, { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const DarkBall = forwardRef((props, ref) => (
  <svg
    className="ic-ball"
    ref={ref}
    {...props}
    viewBox="0 0 96 96"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g style={{ mixBlendMode: "color-burn" }} filter="url(#filter0_f_650_278)">
      <circle cx="48" cy="48" r="24" fill="#D9D9D9" fillOpacity="0.5" />
    </g>
    <circle cx="48" cy="48" r="14" fill="#D9D9D9" />
    <defs>
      <filter
        id="filter0_f_650_278"
        x="0"
        y="0"
        width="96"
        height="96"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="12"
          result="effect1_foregroundBlur_650_278"
        />
      </filter>
    </defs>
  </svg>
));

export default DarkBall;
