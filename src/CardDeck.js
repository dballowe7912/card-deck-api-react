import React, { Component } from 'react';
import axios from 'axios';

export class CardDeck extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    async componentDidMount() {
        const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle');
        console.log(response)
    }



    render() {
        return (
            <div>
                <h1>card deck</h1>
            </div>
        )
    }
}

export default CardDeck
