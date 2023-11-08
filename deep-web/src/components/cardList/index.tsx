import React, { useState, useEffect } from "react";
import * as S from "./style";
import Header from "../layout/Header";
import TestCard from "./testCard";
import customAxios from "src/lib/customAxios";
import { useLocation } from "react-router-dom";
import PageTab from "src/modules/PageTab";
import axios from "axios";

const CardList = () => {
  // const [cardData, setCardData] = useState<any[]>([]);
  const location = useLocation();
  const [tabNum, setTabNum] = useState(location.pathname === "/recent" ? 1 : 0);
  const serverUrl = "https://api.ddeep.store";

  const [templateCardData, setTemplateCardData] = useState<any[]>([]);
  const [imageCardData, setImageCardData] = useState<any[]>([]);

  const fetchTemplateCardData = async () => {
    try {
      const response = await customAxios.get(`${serverUrl}/v2/api/card/template`);
      if (response.data && response.data.data) {
        setTemplateCardData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchImageCardData = async () => {
    try {
      const response = await customAxios.get(`${serverUrl}/v2/api/card/image`);
      if (response.data && response.data.data) {
        setImageCardData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // 초기 렌더링 시, 선택된 탭에 따라 데이터를 가져오도록 수정
    if (tabNum === 0) {
      fetchTemplateCardData();
    } else {
      fetchImageCardData();
    }
  }, [tabNum]);

  return (
    <>
      <Header />
      <S.CardListTitleWrapper>
        <S.CardListTitleBlack>조승완님의</S.CardListTitleBlack>
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
            url: "/cardList",
            component: (
              <>
                <S.TabText>템플릿 명함</S.TabText>
              </>
            ),
          },
          {
            title: "imageCard",
            url: "/imageCard",
            component: (
              <>
                <S.TabText>이미지 명함</S.TabText>
              </>
            ),
          },
        ]}
      />
      <S.CardListContainer>
        <S.CardWrapper style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {tabNum === 0
            ? templateCardData.map((card) => (
                <TestCard key={card.id} cardData={card} />
              ))
            : imageCardData.map((card) => (
                <TestCard key={card.id} cardData={card} />
              ))
          }
        </S.CardWrapper>
      </S.CardListContainer>
    </>
  );
};

export default CardList;
