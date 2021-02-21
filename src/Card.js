import React, { Component } from 'react'

class Card extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props)
        return (
                <img className="Card" src={this.props.image} alt={this.props.name}/>
        )
    }
}

export default Card;
