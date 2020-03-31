import * as React from "react";

function SvgMessages(props) {
  return (
    <svg {...props} width="1em" height="1em" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 6v9H6v2c0 .55.45 1 1 1h11l4 4V8a2 2 0 00-2-2h-1zm-2 6V4a2 2 0 00-2-2H4a2 2 0 00-2 2v13l4-4h10c.55 0 1-.45 1-1z"
        fill="#000"
        fillOpacity={0.6}
      />
    </svg>
  );
}

export default SvgMessages;
