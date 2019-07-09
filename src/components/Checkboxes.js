import React, { Component } from 'react'

export default class Checkboxes extends Component {

    constructor(props){
        super(props);
        this.state = {
        
        }
      }
    render() {
       
        return (
            <div >
                 {this.props.checkboxFacilities.map(facility => {
                    
                  return (
                    <div key={facility.facility} >
                        <input type="checkbox" name={facility.facility} value={facility.facility} onChange={this.toggleCheckbox} /> 
                        <label >{facility.facility}</label> 
                    </div>
                  )
                 })}
            </div>
        )
    }

    

    toggleCheckbox = (event) => {
        this.props.toggleCheckedBoolean(event.target.value)
    }
}
