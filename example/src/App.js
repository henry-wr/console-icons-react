import React, { Component } from 'react'

import {AccountCircle, InfoOutline, CloudUpload as Cloud} from 'console-icons-react'

export default class App extends Component {
  sayHello() {
    alert('Hello');
  }

  render () {
    return (
      <div>
        <AccountCircle width="128" className="small-icon"/>
        <InfoOutline fill="#003e52"/>
        <Cloud fill="#d3d3d3" />
      </div>
    )
  }
}
