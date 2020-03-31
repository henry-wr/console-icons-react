import React, { Component } from 'react'

import {AccountBox, AccountCircle} from 'console-icons-react'

export default class App extends Component {
  sayHello() {
    alert('Hello');
  }

  render () {
    return (
      <div>
        <AccountBox className="small-icon" onClick={this.sayHello}/>
        <AccountCircle className="small-icon"/>
      </div>
    )
  }
}
