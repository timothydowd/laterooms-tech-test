import React, { Component } from 'react'
import Checkboxes from './components/Checkboxes'
import Hotels from './components/Hotels'
const data = require('./data/data.json')

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
    render() {
        return (
            <div>
              <Checkboxes data={this.state.data} />
              <Hotels data={this.state.data} />
            </div>
        )
    }

    componentDidMount(){
      this.setState({data: data})
    }
}
