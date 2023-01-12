import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

const [cards,setCards]=useState([])

useEffect(()=>{
  fetch("http://localhost:3001/pokemon")
  .then(res=>res.json())
  .then(cards=>setCards(cards))
},[])

function toSearch(targetCard){
const newCards=cards.filter(card => card.name.toLowerCase().includes(targetCard.toLowerCase()))
setCards(newCards)
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setCards={setCards} cards={cards} />
      <br />
      <Search toSearch={toSearch} />
      <br />
      <PokemonCollection cards={cards}/>
    </Container>
  );
}

export default PokemonPage;
