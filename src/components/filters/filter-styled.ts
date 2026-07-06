import styled from "styled-components";

export const Wrapper = styled.div`
  width: 330px;
  padding: 10px;

  gap: 10px;
  background: #393939;
  h5 {
    background: rgba(181, 230, 0, 0.08);
    border-bottom: 1px solid rgba(91, 91, 91, 1);
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    padding: 14px 16px;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(57, 57, 57);
  input {
    margin-top: 10px;
    border: none;
    background-color: rgba(62, 62, 62, 1);
    height: 40px;
    color: #fff;
  }
  input::placeholder {
    color: #fff;
    text-align: center;
  }
  input:focus::placeholder {
    color: transparent;
  }
`;
