import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import Button from "./common/Button";

export default function PresentationContainer({
  name,
  MetadataPage = [{ title: "", description: "", image: "" }],
  linkedinURL,
  gitHubURL,
}) {

  const { description, image } = MetadataPage[0];

  return (
    <Container>
      <p>Hello, my name is {name}</p>
      <img src={image} aria-hidden alt='user image' />
      <p className="sub-title">Aboult</p>
      <p>{description}</p>
      < Footer >
        <a href={gitHubURL} target="_blank" rel="noreferrer">
          <Button>
            <BsGithub />
            GitHub
          </Button>
        </a>
        <a href={linkedinURL} target="_blank" rel="noreferrer">
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
  img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 1px solid var(--icon);
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  div{
    width: 140px;
    margin: 10px;
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