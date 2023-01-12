import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({card}) {

  const {name,sprites,hp}=card
  
  // const [front,useFront]=useState(sprites.front)

  // function handleImage(){
  //   useFront(sprites.back)
  // }

  return (
    <Card>
      {/* <div onChange={handleImage} > */}
      <div >
        <div className="image">
          <img src={sprites} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
