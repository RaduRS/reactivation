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
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import Lifecycle from './components/Lifecycle'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComponent from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';


// const youtName = prompt("your name");

class App extends Component{
  render(){
    return (
      <div className="App">
        <ClickCounter name='raduleee'/>
        <HoverCounter/>
        {/* <StyleSheet primary={true}/>
        <h1 className='error'>Error</h1>
        <h1 className={styles.succes}>Succes</h1>
        <Inline/> */}
        {/* <Form/> */}
        {/* <FocusInput/> */}
        {/* <FRParentInput/> */}
        {/* <PortalDemo/> */}

        {/* <ErrorBoundry>
          <Hero heroName='Batman'/>
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroName='Superman'/>
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroName='Joker'/>
        </ErrorBoundry> */}

        {/* <Lifecycle/> */}
        {/* <FragmentDemo/>
        <Table/> */}
        {/* <PureComponent/> */}
        {/* <ParentComp/> */}
        {/* <RefDemo/> */}
        {/* <NameList/> */}
        {/* <UserGreeting/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
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
