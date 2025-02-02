import { Component } from 'react';
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

  render() {
    const { cartoons, searchField } = this.state;
    const filteredCartoons = cartoons.filter((cartoon) =>
      cartoon.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search cartoons"
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState({ searchField });
          }}
        />
        {filteredCartoons.map((cartoon) => (
          <div key={cartoon.id}>
            <h1>{cartoon.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
