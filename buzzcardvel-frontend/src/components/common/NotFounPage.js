import styled from "styled-components";
import { Link } from "react-router-dom";

import Button from "./Button";

export default function NotFoundPage() {

  return (
    <Container>
      <p>Not Found Page</p>
      <LinkContainer to="/">
        <Button>Go to Generate</Button>
      </LinkContainer>
    </ Container>
  );
}

const Container = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p{
    margin: 24px auto;
  }
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
  width: 100%;
`;