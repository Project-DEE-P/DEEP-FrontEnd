import styled from "styled-components";

export const CardContainer = styled.div`
  width: calc(100vw - 30px);
  height: 15rem;
  margin-bottom: 10px;
`;

export const CardNameText = styled.p`
  font-size: 1.2em;
  color: black;
  font-family: "pretendard";
  font-weight: 600;
  margin-bottom: 5px;
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
`;

export const SampleCardImg = styled.img<{ src: string }>`
  width: 100%;
`;
