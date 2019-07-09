import React, { Component } from 'react'
import Checkboxes from './components/Checkboxes'
import Hotels from './components/Hotels'
import { getUniqueFacils, addBooleanToCheckboxes } from './utils/utils'
const data = require('./data/data.json')


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
      checkboxFacilities: []
    }
  }
    

    componentDidMount(){

      this.setState({
        data: data,
        checkboxFacilities: addBooleanToCheckboxes(getUniqueFacils(data))
      })
    }

    componentDidUpdate(){
      console.log('checkBoxFacilities', this.state.checkboxFacilities)
    }

    render() {
      return (
          <div>
            <Checkboxes checkboxFacilities={this.state.checkboxFacilities} data={this.state.data} />
            <Hotels data={this.state.data} />
          </div>
      )
  }
}
