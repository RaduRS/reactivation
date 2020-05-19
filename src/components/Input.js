import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)

        this.state = {
            basket: 0
        }
    
        this.inputRef = React.createRef()
    }

    focusInput(){
        this.setState({
            basket: this.state.basket + 1
        })
    }
    

    render() {
        return (
            <div>
                <h1 ref={this.inputRef}>{this.state.basket}</h1>
            </div>
        )
    }
}

export default Input
