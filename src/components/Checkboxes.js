import React, { Component } from 'react'
import { getUniqueFacils } from '../utils/utils'

export default class Checkboxes extends Component {

    constructor(props){
        super(props);
        this.state = {
          checkboxFacilities: []
        }
      }
    render() {
        console.log('checkboxFacilities: ', this.state.checkboxFacilities)
        console.log('this.props.data from render: ', this.props.data)
        return (
            <div>
                
                checkboxes
            
            </div>
        )
    }

    

    componentDidMount(){
        
        const data = this.props.data
        console.log('this.props.data from componentDidMount: ', data)

        this.setState({
            checkboxFacilities: getUniqueFacils(data)
        })
    }
}
