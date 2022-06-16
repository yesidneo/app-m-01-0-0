import React from "react";
import { Row } from "react-bootstrap";
import Character from "../Character/Character";

const Characters = ({ characters }) => {
  console.log(characters);

  return (

      <Row >
        {characters?.length > 0 &&
          characters.map((character) => <Character key={character.id} {...character} />)}
      </Row>

  );
};

export default Characters;
