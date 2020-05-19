import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef()
    }

    clicHandler = () => {
        this.componentRef.current.focusInput()
    }
    

    render() {
        return (
            <div className='items'>
               <Input ref={this.componentRef}/>
               <div className='inside-items'> 
               <React.Fragment>
                   <h1>Pahar</h1>
                   <button onClick={this.clicHandler}>Add item</button>
               </React.Fragment>
               <React.Fragment>
                   <h1>Cana</h1>
                   <button onClick={this.clicHandler}>Add item</button>
               </React.Fragment>
               <React.Fragment>
                   <h1>Pai</h1>
                   <button onClick={this.clicHandler}>Add item</button>
               </React.Fragment>
               </div>
            </div>
        )
    }
}

export default FocusInput
