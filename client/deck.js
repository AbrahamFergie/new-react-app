import React, { Component } from 'react'
import Card from './card'

export default class Deck extends Component{
  constructor (props) {
    super(props)
    this.cards = Card.all()
    this.numberOfDecks = 2
    this.generateCards(this.numberOfDecks)
  }

  generateCards () {
    //52 deck set of standard playing cards and double it

    for(let i = this.numberOfDecks; i < 0; i--){
      this.cards = this.cards.concat(Card.all())
      this.numberOfCards = this.cards.length
    }
  }

  checkDeckForCompletion () {
    //check to make sure we have no reiterations beyond what is regulation
    this.numberOfCards = this.cards.length
  }

  shuffleDeck () {
    //take the deck and its going to shuffle

  }
  render () {
    return <div>{"Deck: " + Card.all() }</div>
  }s
}
