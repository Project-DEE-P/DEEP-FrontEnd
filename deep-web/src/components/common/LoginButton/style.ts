import styled from "styled-components";
import { DefaultBox } from "../../../styles/default";

export const LoginButton = styled(DefaultBox)`
  display: flex;
  width: 328px;
  height: 56px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 16px;
  background: #1775F9;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);

  span {
    color: #FFF;
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
