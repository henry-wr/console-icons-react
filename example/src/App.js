import React, { Component } from 'react'

import ExampleComponent from 'console-icons-react'
import {FancyHeading} from 'console-icons-react'
import { AccountBox } from 'console-icons-react'

export default class App extends Component {
  sayHello() {
    alert('Hello');
  }

  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <FancyHeading>This is a fancy heading</FancyHeading>
        <AccountBox onClick={this.sayHello}/>
      </div>
    )
  }
}
