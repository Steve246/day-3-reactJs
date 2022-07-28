import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Pilih",
      tahun: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      brand: event.target.value,
    });
    // console.log(event.target.value);
  };

  handleChangeTahun = (event) => {
    this.setState({
      tahun: event.target.value,
    });
    // console.log(event.target.value);
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(this.state.value);
    // alert(`name: ${this.state.value}`);
    // untuk select option
    event.preventDefault();
    console.log(this.state.brand);
    console.log(this.state.tahun);
    const hasil = this.state.brand;
    if (hasil === "Pilih") {
      alert("silakan pilih dlu");
    } else {
      alert(`name: ${this.state.brand}, tahun : ${this.state.tahun}`);
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
              value={this.state.brand}
            /> */}
            {/* pake text area dibawah */}
            {/* <textarea
              value={this.state.brand}
              onChange={this.handleChange}
            ></textarea> */}
            {/* pake select */}
            <select value={this.state.brand} onChange={this.handleChange}>
              <option selected disable>
                Pilih
              </option>
              <option> BMW </option>
              <option> Honda </option>
              <option> Ferari </option>
            </select>
            <br />
            Tahun:
            <input onChange={this.handleChangeTahun} value={this.state.tahun} />
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
