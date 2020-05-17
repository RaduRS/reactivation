import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            message: 12 
        }
        // this.changeName = this.changeName.bind(this)
    }

    changeName = () => {
        this.setState(() => ({
            message: this.state.message + 1
        }))
    }
    
    

    render() {
        const {message} = this.state
        return (
            <div>
                <div>Basket = {message}</div>
                <button onClick={this.changeName}>Add to basket</button>
            </div>
        )
    }
}

export default EventBind
