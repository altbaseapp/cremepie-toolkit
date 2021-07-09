import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 17 31" {...props}>
      <ellipse cx="0.484155" cy="15.4701" rx="15.9348" ry="15.4701" fill="url(#paint0_radial)"/>
      <g filter="url(#filter0_d)">
      <ellipse cx="0.484168" cy="15.4701" rx="5.62406" ry="5.46003" fill="#50E3C2"/>
      </g>
      <defs>
      <filter id="filter0_d" x="-9.68991" y="5.46002" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="2.27501"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.109804 0 0 0 0 0.270588 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
      <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.484155 15.8342) rotate(90) scale(13.603 14.0117)">
      <stop stop-color="#00C4FF" stop-opacity="0.01"/>
      <stop offset="0.359424" stop-color="#32C4F6" stop-opacity="0.264719"/>
      <stop offset="1" stop-color="#53B9EA" stop-opacity="0.01"/>
      </radialGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
