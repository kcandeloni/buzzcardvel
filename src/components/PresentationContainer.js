import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import Button from "./common/Button";

export default function PresentationContainer({
  name,
  MetadataPage = [{ title: "", description: "", image: "" }],
  linkedinURL,
  gitHubURL,
}) {

  const { title, description, image } = MetadataPage[0];

  return (
    <Container>
      <p>Hello, my name is {name}</p>
      <p className="sub-title">Aboult</p>
      <p>{description}</p>
      < Footer >
        <a href={gitHubURL} target="_blank">
          <Button>
            <BsGithub />
            GitHub
          </Button>
        </a>
        <a href={linkedinURL} target="_blank">
          <Button>
            <BsLinkedin />
            Linkedin
          </Button>
        </a>
      </ Footer >
    </ Container >
  );
}

const Container = styled.div`
  width: 80vw;
  p{
    margin: 16px auto;
  }
  .sub-title{
    font-size: 22px;
    font-weight: 700;
  }
  margin-bottom: 80px;
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  div{
    width: 150px;
    margin: 12px;
  }
  a{
    text-decoration: none;
  }
  @media (max-width: 600px) {
    position: fixed;
    left: 0;
    bottom: 0;
    justify-content: space-around;
  }
`;