import React, { Component } from 'react'
import Checkboxes from './components/Checkboxes'
import Hotels from './components/Hotels'
import { getUniqueFacils } from './utils/utils'
const data = require('./data/data.json')


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      checkboxFacilities: []
    }
  }
    render() {
        return (
            <div>
              <Checkboxes checkboxFacilities={this.state.checkboxFacilities} data={this.state.data} />
              <Hotels data={this.state.data} />
            </div>
        )
    }

    componentDidMount(){
      this.setState({
        data: data,
        checkboxFacilities: getUniqueFacils(data)
      })
    }
}
