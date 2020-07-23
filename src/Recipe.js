import React, { Component } from "react";

class Recipe extends Component {
  render() {
    const { title, img } = this.props.data;
    return (
      <div className="recipe col-sm-5">
        <div className="dish-title">{title}</div>
        <div className="dish-body">
          <img src={img} alt="Recipe pics" className="dish"></img>
        </div>
      </div>
    );
  }
}

export default Recipe;
