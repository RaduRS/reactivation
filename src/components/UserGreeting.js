import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggenIn: false
        }
    }

    LogIn = () => {
        this.setState({
            isLoggenIn: true
        })
    }

    render() {
        return(
            this.state.isLoggenIn ? 
            <div>Welcome Rob</div> : 
            <div>Who are you? <button onClick={this.LogIn}>Log</button></div>
        )
        }

    }

export default UserGreeting
