import React, { Component } from 'react'
import Checkboxes from './components/Checkboxes'
import Hotels from './components/Hotels'
import { getUniqueFacils, addBooleanToCheckboxes, toggleCheckedBooleanInCheckboxFacilites } from './utils/utils'
const data = require('./data/data.json')
// const { getUniqueFacils, addBooleanToCheckboxes, toggleCheckedBooleanInCheckboxFacilites } = require('./utils/utils')


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
        checkboxFacilities: (addBooleanToCheckboxes(getUniqueFacils(data)))
      })
    }

    componentDidUpdate(){
      console.log('checkBoxFacilities', this.state.checkboxFacilities)
    }

    toggleCheckedBoolean = (facility) => {
      const toggledCheckboxes = toggleCheckedBooleanInCheckboxFacilites(this.state.checkboxFacilities, facility)
      this.setState({ checkboxFacilities: toggledCheckboxes})
    }

    render() {
      return (
          <div>
            <Checkboxes toggleCheckedBoolean={this.toggleCheckedBoolean} checkboxFacilities={this.state.checkboxFacilities} data={this.state.data} />
            <Hotels data={this.state.data} />
          </div>
      )
  }
}
