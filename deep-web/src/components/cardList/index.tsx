import React, { useState, useEffect } from "react";
import * as S from "./style";
import Header from "../layout/Header";
import TestCard from "./testCard";
import { useLocation } from "react-router-dom";
import PageTab from "src/modules/PageTab";
import axios from "axios";

const CardList = () => {
  const [cardData, setCardData] = useState<any[]>([]);
  const location = useLocation();
  const [tabNum, setTabNum] = useState(location.pathname === "/recent" ? 1 : 0);

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
      <Header />
      <S.CardListTitleWrapper>
        <S.CardListTitleBlack>최희건님의</S.CardListTitleBlack>
        <S.CardListRowContainer>
          <S.CardListTitleBlue>DEE:P</S.CardListTitleBlue>
          <S.CardListTitleBlack>명함 리스트</S.CardListTitleBlack>
        </S.CardListRowContainer>
      </S.CardListTitleWrapper>
      <PageTab
        {...{ tabNum, setTabNum }}
        tabItems={[
          {
            title: "DEE:P",
            url: "/",
            component: (
              <>
                <S.TabText>템플릿 명함</S.TabText>
              </>
            ),
          },
          {
            title: "imageCard",
            url: "imageCard",
            component: (
              <>
                <S.TabText>이미지 명함</S.TabText>
              </>
            )
          }
        ]}
      />
      <S.CardListContainer>
        <S.CardWrapper>
          {cardData.map((card) => (
            <TestCard key={card.id} cardData={card} />
          ))}
        </S.CardWrapper>
      </S.CardListContainer>
    </>
  );
};

export default CardList;
