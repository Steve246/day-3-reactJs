import { Component } from "react";

class ListCompnents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: ["Sabun", "Shampo", "Sikat Gigi", "Sabun Mandi"],
    };

    this.stateTwo = {
      products: [
        { id: 1, brand: "Sabun" },
        { id: 2, brand: "Shampoo" },
      ],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.products.map((p) => (
            <li> {p} </li>
          ))}
        </ul>

        <ul>
          {this.stateTwo.products.map((p) => (
            <li key={p.id}>
              {" "}
              Key = {p.id} brand = {p.brand}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListCompnents;
