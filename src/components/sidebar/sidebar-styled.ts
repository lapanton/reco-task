import styled from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  padding: 0 15px;
  flex-direction: column;
  width: 131px;
  background: rgba(57, 57, 57, 1);
  min-height: 400px;
  gap: 10px;
  img {
    width: 100px;
    height: 36.84px;
    padding: 11px;
  }
  nav {
    height: 100vh;
    background: rgba(57, 57, 57, 1);
  }
  ul {
    background: rgba(57, 57, 57, 1);
  }
  li {
    width: 110px;
    padding-left: 5px;
    a {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 300;
      padding-left: 9px;
      &.active {
        border-left: 2.25px solid #b5e600;
      }
    }
  }
  a {
    font-weight: 500;
    color: #fff;
  }
`;
