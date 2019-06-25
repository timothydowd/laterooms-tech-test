import React, { Component } from 'react'
import Checkboxes from './components/Checkboxes'
import Hotels from './components/Hotels'

export default class App extends Component {
    render() {
        return (
            <div>
              <Checkboxes />
              <Hotels />
            </div>
        )
    }
}
