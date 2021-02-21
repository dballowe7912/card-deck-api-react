import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import './CardDeck.css';


const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class CardDeck extends Component {
    constructor(props){
        super(props);

        this.state = {
            deck: null,
            drawn: []
        }

        this.drawCard = this.drawCard.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({ deck: deck.data });
    }

    async drawCard(){
        let id = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if(!cardRes.data.success) {
                throw new Error("NO CARDS REMAINING")
            }
            let card = cardRes.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }));
        } catch (err) {
            alert(err);
        }
    }

    render() {
        const cards = this.state.drawn.map(card => (
            <Card key={card.id} name={card.name} image={card.image} />
        ));
        return (
            <div className="Deck">
                <h1 className="Deck-title">Card Dealer</h1>
                <h2 className="Deck-title subtitle">A little demo made with React</h2>
                <button className="Deck-btn" onClick={this.drawCard}>Draw Card</button>
                <div className="Card-Container" >{cards}</div>
            </div>
        )
    }
}

export default CardDeck;
