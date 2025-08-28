import React from "react";

interface MinusIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const MinusIcon: React.FC<MinusIconProps> = ({
  width = 32,
  height = 32,
  color = "#000000",
}) => {
  return (
    <svg
      viewBox="0 0 32 32"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>minus-circle</title>
      <path
        d="M22,17H10c-0.553,0-1-0.45-1-1s0.447-1,1-1h12c0.553,0,1,0.45,1,1S22.553,17,22,17z M16,0C7.163,0,0,7.16,0,16
        s7.163,16,16,16s16-7.16,16-16S24.837,0,16,0z"
        fill={color}
      />
    </svg>
  );
};

export default MinusIcon;