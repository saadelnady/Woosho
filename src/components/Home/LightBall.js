import React, { forwardRef } from "react";

const IcBallLight = forwardRef((props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g style={{ mixBlendMode: "color-burn" }} filter="url(#filter0_f_671_1275)">
      <circle cx="48" cy="48" r="24" fill="#AEFF03" />
    </g>
    <circle cx="48" cy="48" r="14" fill="white" />
    <defs>
      <filter
        id="filter0_f_671_1275"
        x="0"
        y="0"
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
          result="effect1_foregroundBlur_671_1275"
        />
      </filter>
    </defs>
  </svg>
));

export default IcBallLight;
