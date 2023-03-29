import styled from "styled-components";

export default function CodeContainer({ src, name }) {


  return (
    <Container>
      <p>{name}</p>
      <p>Scan Me</p>
      <CodeImg src={src} />
    </ Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p{
    margin: 24px auto;
  }
`;

const CodeImg = styled.img`
  width: 150px;
  height: 150px;
`;
