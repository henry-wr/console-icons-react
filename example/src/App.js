import React, { Component } from 'react'

import ExampleComponent from 'console-icons-react'
import {FancyHeading, AccountBox, AccountCircle} from 'console-icons-react'
import {Iconz} from 'console-icons-react'

export default class App extends Component {
  sayHello() {
    alert('Hello');
  }

  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <FancyHeading>This is a fancy heading <AccountCircle className="small-icon" /></FancyHeading>
        <AccountBox className="small-icon" onClick={this.sayHello}/>
        <AccountCircle className="small-icon"/>
        <Iconz.AccountCircle />
      </div>
    )
  }
}
