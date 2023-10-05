import styled from "styled-components";
import { DefaultBox } from "../../styles/default";

export const CardListContainer = styled(DefaultBox)`
  min-height: calc(100vh - 40px);
  padding: 30px;
  overflow-y: scroll;
`;

export const CardListTitleBlack = styled.div`
  font-size: 1.2em;
  color: black;
  font-family: "pretendard";
  font-weight: 600;
`;

export const CardListTitleBlue = styled.div`
  font-size: 1.2em;
  color: #1775f9;
  font-family: "pretendard";
  font-weight: 600;
`;

export const CardListTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 20px;
  overflow-y: scroll;
`;
