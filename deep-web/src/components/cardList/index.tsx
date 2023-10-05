import React from "react";
import Layout from "../../container/share/Layout";
import * as S from "./style";
import AppHeader from "../layout/AppHeader";
import Card from "./card";
const CardList = () => {
  return (
    <>
      <AppHeader />
      <S.CardListContainer>
        <S.CardListTitleWrapper>
          <S.CardListTitleBlack>최희건 님의</S.CardListTitleBlack>
          <S.CardListTitleBlue>DEE:P</S.CardListTitleBlue>
          <S.CardListTitleBlack>명함 리스트</S.CardListTitleBlack>
        </S.CardListTitleWrapper>
        <S.CardWrapper>
          {[...Array(5)].map((idx) => (
            <Card></Card>
          ))}
        </S.CardWrapper>
      </S.CardListContainer>
    </>
  );
};

export default CardList;
