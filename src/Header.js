import React, { Component } from 'react'
import Chef from "./Chef.svg";

class Header extends Component {
    render() {
        return (
            <div  className="header">
                <img src={Chef} alt="ChefAura"></img>
            </div>
        )
    }
}

export default Header
