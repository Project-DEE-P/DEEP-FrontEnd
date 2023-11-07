import styled from "styled-components";
import { DefaultBox } from "../../../styles/default";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 40px;
  background: #fff;
`;

export const LogoImg = styled.img<{ src: string }>`
  width: 5rem;
  height: 1.2rem;
`;

export const AppHeaderBox = styled.div`
  position: relative;
  margin: 30px;
`;

export const HeaderButtonBox = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 20px;
  display: flex;
  align-items: center;

  button {
    background: #fff;
    border: none;
    cursor: pointer;
  }
`;
export const HeaderButton = styled.a`
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
  font-family: pretendard;

  display: flex;
  justify-content: center;

  & > img {
    width: 14px;
    height: 14px !important;
    background: #ededed;
    margin: 8px !important;
  }
`;
