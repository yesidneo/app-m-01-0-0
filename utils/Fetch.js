import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Characters from "../components/Characters/Characters";
import useFetch from "../hooks/useFetch";

const Fetch = () => {
  const [endpoint, setEndpoint] = useState("character");
  const {data, error, loading}= useFetch(endpoint);
  const { results: characters, info} = data;

  return (
      <Container>
        <Characters characters={characters} />
      </Container>
  );
};

export default Fetch;
