import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class Lifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Radu'
        }
        console.log('Lifecicly constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Life from getDerivedProps')
        return null
    }

    componentDidMount(){
        console.log('life did mount')
    }

    render() {
        console.log('life render')
        return (
            <div>
                <h1>Life A</h1>
                <LifecycleB/>
            </div>
        )
    }
}

export default Lifecycle
