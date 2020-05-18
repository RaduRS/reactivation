import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Radu'
        }
        console.log('Lifecicly constructorB')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Life from getDerivedPropsB')
        return null
    }

    componentDidMount(){
        console.log('life did mountB')
    }

    render() {
        console.log('life renderB')
        return (
            <div>
                <h1>Life B</h1>
            </div>
        )
    }
}

export default LifecycleB