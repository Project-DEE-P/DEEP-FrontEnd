import React from "react";
import * as S from "./style";
import Sample from "../../../assets/img/SampleCard.svg";

interface Props {
    cardData: any;
  }

  const TestCard: React.FC<Props> = ({ cardData }) => {
  return (
    <>
      <S.CardContainer>
        <S.CardNameWrapper>
          <S.CardNameText>{cardData.data}</S.CardNameText>
          <S.CardNameText>님의 명함</S.CardNameText>
          <S.CardDateText>2023년 10월 06일</S.CardDateText>
        </S.CardNameWrapper>
        <S.SampleCardImg src={Sample}></S.SampleCardImg>
      </S.CardContainer>
    </>
  );
};

export default TestCard;
