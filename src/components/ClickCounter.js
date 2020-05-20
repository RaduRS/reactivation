import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    render() {
        const {increment, count} = this.props
        return (
            <div>
                <h1>Hello </h1>
                <button onClick={increment}>Click {count} {this.props.name}times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)
