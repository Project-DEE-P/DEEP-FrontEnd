import React, { useState, useEffect } from "react";
import Layout from "../../container/share/Layout";
import * as S from "./style";
import AppHeader from "../layout/AppHeader";
import Card from "./card";
import { customAxios } from "../../lib/customAxios";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

const CardList = () => {
  const [cardData, setCardData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://127.0.0.1:8082/v1/api/card/remember")
      .then(function (response) {
        console.log(response);
        if (response.data && response.data.data) {
          setCardData(response.data.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <AppHeader />
      <S.CardListContainer>
        <S.CardListTitleWrapper>
          <S.CardListTitleBlack>최희건님의</S.CardListTitleBlack>
          <S.CardListTitleBlue>DEE:P</S.CardListTitleBlue>
          <S.CardListTitleBlack>명함 리스트</S.CardListTitleBlack>
        </S.CardListTitleWrapper>
        <S.CardWrapper>
          {/* {cardData.map((card) => (
            <Card key={card.id} />
          ))} */}
          <Card />
        </S.CardWrapper>
      </S.CardListContainer>
    </>
  );
};

export default CardList;
