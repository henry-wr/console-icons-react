import * as React from "react";

function SvgInfoOutlinez(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" {...props}>
      <path d="M0 0h24v24H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
      />
      <path d="M11 11h2v6h-2z" />
      <circle cx={12} cy={7.5} r={1.5} />
    </svg>
  );
}

export default SvgInfoOutlinez;
