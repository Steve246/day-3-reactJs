import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Pilih" };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    // console.log(event.target.value);
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(this.state.value);
    // alert(`name: ${this.state.value}`);
    // untuk select option
    event.preventDefault();
    console.log(this.state.value);
    const hasil = this.state.value;
    if (hasil === "Pilih") {
      alert("silakan pilih dlu");
    } else {
      alert(`name: ${this.state.value}`);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            {/* <input
              type="text"
              placeholder="username"
              onChange={this.handleChange}
              value={this.state.value}
            /> */}
            {/* pake text area dibawah */}
            {/* <textarea
              value={this.state.value}
              onChange={this.handleChange}
            ></textarea> */}
            {/* pake select */}
            <select value={this.state.value} onChange={this.handleChange}>
              <option selected disable>
                Pilih
              </option>
              <option> BMW </option>
              <option> Honda </option>
              <option> Ferari </option>
            </select>
          </label>
          <button type="submit" value="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
