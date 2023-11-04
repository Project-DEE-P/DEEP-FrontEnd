import styled from "styled-components";

export const CardContainer = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  box-sizing: border-box;
  @media screen and (min-width: 1024px) {
    width: 360px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const CardNameText = styled.p`
  font-size: 1.2em;
  color: black;
  font-family: "pretendard";
  font-weight: 600;
  margin-bottom: 5px;
  @media screen and (min-width: 1024px) {
    font-size: 0.6em;
  }
`;

export const CardNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const CardDateText = styled.p`
  font-size: 1em;
  color: #8c9aab;
  font-family: "pretendard";
  font-weight: 400;
  margin-left: 1em;
  margin-bottom: 5px;
  @media screen and (min-width: 1024px) {
    font-size: 0.5em;
  }
`;

export const SampleCardImg = styled.img<{ src: string }>`
  width: calc(100vw - 30px);
  @media screen and (min-width: 1024px) {
    width: 300px;
  }
`;
