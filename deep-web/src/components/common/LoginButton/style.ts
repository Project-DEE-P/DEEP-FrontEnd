import styled from "styled-components";
import { DefaultBox } from "../../../styles/default";

export const LoginButton = styled.div`
  display: flex;
  width: 328px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 16px;
  background: #1775f9;
  cursor: pointer;
  margin-top: -10vh;

  span {
    color: #fff;
    font-family: Pretendard;
    font-size: 19px;
    font-weight: 600;
    line-height: normal;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 328px;
    font-size: 16px;
  }
`;
