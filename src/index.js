import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.test}>
        Example Component: {text}
      </div>
    )
  }
}
export {default as FancyHeading} from './js/components/Heading';
export {default as AccountBox} from './js/components/AccountBox';
export {default as AccountCircle} from './js/components/AccountCircle';
export * as Iconz from './js/components/index';