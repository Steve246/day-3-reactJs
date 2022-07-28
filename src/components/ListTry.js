import { Component } from "react";

class ListTry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let listItem = this.props.list.map((nameItem) => {
      return <li key={nameItem.id}>{nameItem.value}</li>;
    });
    return (
      <div>
        <ul>{listItem}</ul>
      </div>
    );
  }
}

export default ListTry;
