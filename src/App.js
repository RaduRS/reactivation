import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClicks'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'

// const youtName = prompt("your name");

class App extends Component{
  render(){
    return (
      <div className="App">
        {/* <EventBind/> */}
        <ParentComponent/>
        <ParentComponent/>
        <ParentComponent/>
        {/* <FunctionClick basket={this.changeBasket}/>
        <ClassClick/> */}
        {/* <Greet name="Robert">
        <p>This is children</p>
        </Greet>
        <Greet name="Radu">
        <button>Apasaaa</button>
        </Greet>
        <Greet name="Elena"/> */}
        {/* <Welcome name="Robert"/>
        <Welcome name="Radu"/>
        <Welcome name="Elena"/> */}
        {/* <Message/> */}
        {/* <Hello name={'Daddario'}/> */}
        {/* <Counter addValue={10}/> */}
      </div>
    );
  }
}

export default App;
