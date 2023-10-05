import React, { useState } from "react";
import Layout from "../../container/share/Layout";
import * as S from "./style";
import AppHeader from "../layout/AppHeader";
import Card from "./card";
import axios, { AxiosResponse } from "axios";

const CardList = () => {
  const [cardData, setCardData] = useState<AxiosResponse | null | void>([]);
  axios
    .get("https://127.0.0.1:8080/v1/api/card/remember")
    .then(function (response) {
      console.log(response);
      setCardData(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});

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
