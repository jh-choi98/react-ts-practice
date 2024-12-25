import React, { useState } from "react";
import Board from "./components/Board";
import styled from "styled-components";

const TurnIndicator = styled.h1``;

function App() {
  const [player, setPlayer] = useState(true);
  return (
    <>
      <TurnIndicator>{`Next Player: ${player ? "O" : "X"}`}</TurnIndicator>
      <Board />
    </>
  );
}

export default App;
