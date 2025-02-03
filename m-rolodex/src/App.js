import { Component } from 'react';
import CardList from './components/card-list/card-list.components';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cartoons: [],
      searchField: '',      
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { cartoons: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState({ searchField });
  }
  render() {

    const { cartoons, searchField } = this.state;
    const{ onSearchChange} = this;

    const filteredCartoons = cartoons.filter((cartoon) =>
      cartoon.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search cartoons"
          onChange={onSearchChange}/>        
        <CardList cartoons = {filteredCartoons} />
      </div>
    );
  }
}

export default App;
