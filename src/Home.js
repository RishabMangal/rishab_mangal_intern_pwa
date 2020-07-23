import React, { Component } from "react";
import paneer from './paneer.png';
import dosa from './dosa.jpg';
import Recipe from "./Recipe";
import Footer from "./Footer";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipies: [
        { title: "Panner Butter Masala", img: paneer },
        { title: "Butter Masala Dosa", img: dosa },
        { title: "Panner Butter Masala", img: paneer },
        { title: "Butter Masala Dosa", img: dosa },
      ],
    };
  }

  render() {
    const { recipies } = this.state;
    return (
      <div>
        {recipies.map((r, i) => (
          <div className="row mx-0" key={i}>
            <Recipe data={r}></Recipe>
          </div>
        ))}
            <Footer></Footer>
      </div>
    );
  }
}

export default Home;
