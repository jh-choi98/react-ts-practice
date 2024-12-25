import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 300px;
  width: 300px;
`;
const Cell = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 1);
`;
function Board() {
  const cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <Container>
      {cells.map((cell) => (
        <Cell />
      ))}
    </Container>
  );
}

export default Board;
