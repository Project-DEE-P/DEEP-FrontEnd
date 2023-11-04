import styled from "styled-components";
import { DefaultBox } from "../../../styles/default";



export const HeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  background: #fff;
`;

export const AppHeaderBox = styled(DefaultBox)`
  position: relative;
  padding: 0 20px;

  a {
    img {
      height: 20px;
      margin: 10px 0;
      margin-top: 1.3%;
      text-decoration: none !important;
    }
  }
`;

export const HeaderButtonBox = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 20px;
  display: flex;
  align-items: center;

  button {
    background:  #fff;
    border: none;
    cursor: pointer;
  }
`;

export const HeaderButton = styled.a`
  width: 30px;
  height: 30px;
  margin-left: 10px;

  div {
    color: #0A3570;
    text-align: center;
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 500;
    margin-left: 50px;
  }
`;