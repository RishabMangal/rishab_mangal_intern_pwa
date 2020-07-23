import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {});
    };
    submitHandler = (e) => {
        e.preventDefault();
        alert("Submitted");
        window.location="/"
    }
  render() {
    return (
      <div className="row mx-0">
        <form className="col-sm-5 form needs-validation " onSubmit={this.submitHandler} novalidate>
          <div className="form-group input-group-append">
            <label for="title" className="bmd-label-floating">
              Recipe Title* (3-5 words)
            </label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChangeHandler}
              maxLength="50"
              id="title"
              required
            ></input>
            <span className="input-group-text">
              {this.state.title.length}/50
            </span>
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
          <div className="form-group input-group-append">
            <label for="Description" className="bmd-label-floating">
              Description
            </label>
            <input
              className="form-control"
              name="description"
              value={this.state.description}
              onChange={this.onChangeHandler}
              maxLength="200"
            ></input>
            <span className="input-group-text">
              {this.state.description.length}/200
            </span>
          </div>
          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
