import * as React from "react";

function SvgAdd(props) {
  return (
    <svg {...props} width="1em" height="1em" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
        fill="#000"
        fillOpacity={0.6}
      />
    </svg>
  );
}

export default SvgAdd;
