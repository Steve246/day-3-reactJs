import { Component } from "react";
import FormTry from "./FormTry";
import ListTry from "./ListTry";

class FormList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }
  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };
  handleSubmit = () => {
    const newItems = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    this.setState({
      list: [...this.state.list, newItems],
      newItem: "",
    });
  };
  render() {
    return (
      <div>
        <FormTry
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newItem={this.state.newItem}
        />
        <ListTry list={this.state.list} />
      </div>
    );
  }
}

export default FormList;
