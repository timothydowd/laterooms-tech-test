import React, { Component } from 'react'
import { getUniqueFacils } from '../utils/utils'

export default class Checkboxes extends Component {

    constructor(props){
        super(props);
        this.state = {
        //   checkboxFacilities: []
        }
      }
    render() {
        console.log('checkboxFacilities: ', this.props.checkboxFacilities)
       
        return (
            <div>
                
                checkboxes
            
            </div>
        )
    }

    

    componentDidMount(){
        
       
    }
}
