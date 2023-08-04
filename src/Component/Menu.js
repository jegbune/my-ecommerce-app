import React, { Component } from "react";

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            Brand: 'Ford',
            Model: 'Mustang',
            Color: 'red',
            Year: 1964
        }
    }

    changeColor =() => {
        this.setState ({Color: 'blue'})
    }
    
    render() {
        return(
            <>
            <p>I have a {this.state.Brand + ' ' + this.state.Model}, it's a {this.state.Color} color. it was manufactured in the Year {this.state.Year}</p>
            <button onClick={this.changeColor} >Change Color</button>
            </>
        
            )
    }

}

export default Menu