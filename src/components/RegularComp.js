import React, { Component } from 'react'

class RegularComp extends Component {
    render() {
        console.log('reg')
        return (
            <div>
               Regular Comp {this.props.name}
            </div>
        )
    }
}

export default RegularComp
