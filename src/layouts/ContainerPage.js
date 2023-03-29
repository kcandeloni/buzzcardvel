import styled from "styled-components";
import Page from "../components/common/Page";

export default function ContainerPage({ children }) {
  return (
    <Page>
      <StyledContainer>
        {children}
      </StyledContainer>
    </Page>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
`;
