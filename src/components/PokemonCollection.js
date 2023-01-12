import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({cards}) {

  return (
    <Card.Group itemsPerRow={6}>
      <h1>
        { cards.map((card) => {
         return <PokemonCard key={card.id} card={card}/>
        })}
        </h1>
      
    </Card.Group>
  );
}

export default PokemonCollection;
