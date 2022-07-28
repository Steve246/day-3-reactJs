import { Component } from "react";
import ButtonClick from "./ButtonClick";

class FormList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  //   callback = (val) => {
  //     this.setState({
  //       list: val
  //     })
  // }

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
      // [`${key}`]: value,
    });
  };

  handleSubmit = () => {
    // const newItem2 = {
    //   id: 1 + Math.random(),
    //   value: this.state.newItem.slice(),
    // };

    // const list = [...this.state.list];
    // console.log(list);

    // list.push(newItem2);

    // this.setState({
    //   list,
    //   newItem: "",
    //   // newItem dikasih string kosong, agar tiap kali ke add, formnya jadi kosong
    // });

    // bisa di rework jadi bawah

    const newItem2 = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    this.setState({
      list: [...this.state.list, newItem2],
      newItem: "",
      // newItem dikasih string kosong, agar tiap kali ke add, formnya jadi kosong
    });
  };

  render() {
    let listItem = this.state.list.map((nameItem) => {
      return <li key={nameItem.id}> {nameItem.value} </li>;
    });

    return (
      <div>
        <label>
          <input
            type="text"
            name="name"
            value={this.state.newItem}
            onChange={(e) => this.handleChange("newItem", e.target.value)}
          />
        </label>

        <button
          type="submit"
          value="submit"
          onClick={() => this.handleSubmit()}
        >
          {" "}
          Add Item
        </button>
        <ul> {listItem} </ul>
      </div>

      // <ButtonClick value={this.state.newItem} />
    );
  }
}

export default FormList;
