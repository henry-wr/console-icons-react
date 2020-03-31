import * as React from "react";

function SvgBookmark(props) {
  return (
    <svg {...props} width="1em" height="1em" viewBox="0 0 24 24" fill="none">
      <path
        d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
        fill="#000"
        fillOpacity={0.6}
      />
    </svg>
  );
}

export default SvgBookmark;
