import React, { Component } from 'react'
import Checkboxes from './components/Checkboxes'
import Hotels from './components/Hotels'
import { getUniqueFacils, addBooleanToCheckboxes, toggleCheckedBooleanInCheckboxFacilites, filterHotelsByCheckedFacilities } from './utils/utils'
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

      const uniqueFacilities = getUniqueFacils(data)
      const toggledCheckboxes = addBooleanToCheckboxes(uniqueFacilities) 

      this.setState({
        data: data,
        checkboxFacilities: toggledCheckboxes
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
