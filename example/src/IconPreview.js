import React from 'react'
import * as Iconz from 'console-icons-react'

export default function App() {
  const iconz = Object.keys(Iconz);
  const content = iconz.map(key => {
    const Component = Iconz[key];
    return (
      <div className="icon-wrapper" key={key}>
        <Component height="64"/>
        <p>{key}</p>
      </div>
      
    );
  });
  return <div className="flex-wrapper">{content}</div>;
}