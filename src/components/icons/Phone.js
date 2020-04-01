import * as React from "react";

function SvgPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" {...props}>
      <path d="M17 19H7V5h10v14zm0-18H7c-1.11 0-2 .89-2 2v18a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2z" />
    </svg>
  );
}

export default SvgPhone;
