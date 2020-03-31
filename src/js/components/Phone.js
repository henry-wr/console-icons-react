import * as React from "react";

function SvgPhone(props) {
  return (
    <svg {...props} width="1em" height="1em" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 19H7V5h10v14zm0-18H7c-1.11 0-2 .89-2 2v18a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2z"
        fill="#000"
        fillOpacity={0.6}
      />
    </svg>
  );
}

export default SvgPhone;
