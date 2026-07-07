import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: #393939;
  margin: 0 10px;
  position: relative;
  @media (max-width: 768px) {
    width: auto;
    padding-bottom: 50px;
    overflow-x: auto;
  }
`;

export const Table = styled.table`
  padding-bottom: 20px;
  color: white;
  width: 100%;
  th {
    background: rgba(181, 230, 0, 0.08);
    padding: 14px 16px;
  }
  th,
  td {
    text-align: left;
    font-size: 12px;
    font-weight: 300;
  }
  td {
    background: rgba(62, 62, 62, 1);
    padding: 14px 16px;
  }
`;

export const WrapPagination = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
