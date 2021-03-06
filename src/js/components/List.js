import * as React from "react";

function SvgList(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="24" {...props}>
      <path d="M19 5v14H5V5h14zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2z" />
    </svg>
  );
}

export default SvgList;
