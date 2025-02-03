import { Component } from "react";

class CardList extends Component {
  render() {
    const { cartoons } = this.props;
    return (
      <div>
        {cartoons.map((cartoon) => (
          <h1 key={cartoon.id}>{cartoon.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
