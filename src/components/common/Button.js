import styled from "styled-components";

export default function Button({ variant = "contained", children, ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.div`
  width: 50%;
  margin: 12px auto;
  column-gap: 12px;
  font-size: 16px;
  text-align: center;
  background-color: var(--button);
  color: var(--textButton);
  -webkit-transition: all .2s,color .2s;
  transition: all .2s,color .2s;
  cursor: pointer;
  &:hover{
    background-color: var(--icon);
  }
  border-radius: 5px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;