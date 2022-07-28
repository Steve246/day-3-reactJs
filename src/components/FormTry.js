import { Component } from "react";

class FormTry extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <label>
          <input
            type="text"
            name="name"
            value={this.props.newItem}
            onChange={(e) => this.props.handleChange("newItem", e.target.value)}
          />
        </label>
        <button
          type="submit"
          value="submit"
          onClick={() => this.props.handleSubmit()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default FormTry;
