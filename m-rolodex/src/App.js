import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
       cartoons:[],      
    
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => this.setState(()=>{
        return {cartoons: users}
    }));
    // .then(response => console.log(response));

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
