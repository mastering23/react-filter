import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {

       cartoons:[

        {
            name:'Linda',
            id:'01',
        },

        {
            name:'Mark',
            id:'02',
        },

        {
            name:'Jane',
            id:'03',
        },

        {
            name:'Petter',
            id:'04',
        },

       ],   
    
    };
  }

  render() {
    return <div className="App">
        {this.state.cartoons.map((cartoon)=>{
            return <div key={cartoon.id}><h1>{cartoon.name}</h1></div>;
              
        })}
    </div>;
  }
}

export default App;
