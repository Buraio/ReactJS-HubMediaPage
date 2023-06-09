import styled from "styled-components";
import StyledContainer from "../../styles/Container";

const StyledDashContainer = styled(StyledContainer)`
  & ul {
    width: 100%;
    min-height: 600px;
    padding: 23px;
    background-color: var(--gray-3);
    border-radius: 4px;
  }

  @media (min-width: 500px) {
    max-width: 500px;
    padding: 0;
    margin: 50px auto;
  }

  @media (min-width: 900px) {
    max-width: 800px;
  }

  @media (min-width: 1200px) {
    max-width: 1000px;
  }
`;

export default StyledDashContainer;
