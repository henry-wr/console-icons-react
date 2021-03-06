import * as React from "react";

function SvgCloudUpload(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" {...props}>
      <g clipPath="url(#cloud-upload_svg__clip0)">
        <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z" />
      </g>
      <defs>
        <clipPath id="cloud-upload_svg__clip0">
          <path d="M0 0h24v24H0V0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgCloudUpload;
