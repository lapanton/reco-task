import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 162px);
  min-height: 100vh;
  display: flex;
  align-content: stretch;
  gap: 10px;
  @media (max-width: 768px) {
    width: 100%;
    min-height: auto;
    flex-direction: column-reverse;
  }
`;
