import styled from "styled-components";
import { DefaultBox } from "../../styles/default";

export const CardListContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 30px;
  overflow-y: scroll;

  @media screen and (min-width: 1024px) {
    padding-left: 15vw;
    padding-right: 15vw;
    background: #f2f3f8;
    font-family: Pretendard;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
`;
export const CardListRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const CardListTitleBlack = styled.div`
  font-size: 1.2em;
  color: black;
  font-family: "pretendard";
  font-weight: 600;
  @media screen and (min-width: 1024px) {
    color: #000;
    font-family: Pretendard;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    align-items: center;
  }
`;

export const CardListTitleBlue = styled.div`
  font-size: 1.2em;
  color: #1775f9;
  font-family: "pretendard";
  font-weight: 600;
  margin-right: 0.5vh;
  @media screen and (min-width: 1024px) {
    color: #1775f9;
    font-family: Pretendard;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    align-items: center;
  }
`;

export const CardListTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 5px;
  padding-left: 30px;
  padding-right: 30px;
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    padding-left: 15vw;
    padding-right: 15vw;
    box-sizing: border-box;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 20px;
`;
