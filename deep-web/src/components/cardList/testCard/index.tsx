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
          <S.CardNameText>{cardData.name}</S.CardNameText>
          <S.CardNameText>님의 명함</S.CardNameText>
          <S.CardDateText>
            {new Date(cardData.date).toLocaleDateString()}
          </S.CardDateText>
        </S.CardNameWrapper>
        <S.SampleCardImg src={Sample}></S.SampleCardImg>
      </S.CardContainer>
    </>
  );
};

export default TestCard;
