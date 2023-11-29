import React, { useState, useEffect } from "react";
import * as S from "./style";
import Header from "../layout/Header";
import TestCard from "./testCard";
import customAxios from "src/lib/customAxios";
import { useLocation } from "react-router-dom";
import PageTab from "src/modules/PageTab";

const CardList = () => {
  const location = useLocation();
  const [tabNum, setTabNum] = useState(location.pathname === "/recent" ? 1 : 0);
  const serverUrl = "https://api.ddeep.store";
  const [imageurl, setImageUrl] = useState<any>(null);
  const [templateCardData, setTemplateCardData] = useState<any[]>([]);
  const [imageCardData, setImageCardData] = useState<any[]>([]);

  const fetchTemplateCardData = async () => {
    try {
      const response = await customAxios.get(`${serverUrl}/v2/api/card/template`);
      if (response.data && response.data.data) {
        console.log("Template card data:", response.data.data);
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
        console.log("Image card data:", response.data.data);
        setImageCardData(response.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("Mount");
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
        <S.CardListTitleBlack>유지민님의</S.CardListTitleBlack>
        <S.CardListRowContainer>
          <S.CardListTitleBlue>DEE:P</S.CardListTitleBlue>
          <S.CardListTitleBlack>명함 리스트</S.CardListTitleBlack>
        </S.CardListRowContainer>
      </S.CardListTitleWrapper>
      <PageTab
        tabNum={tabNum}
        setTabNum={setTabNum}
        tabItems={[
          {
            title: "DEEP",
            url: "/cardList",
            component: (
              <>
                <S.TabText>템플릿 명함</S.TabText>
              </>
            ),
          },
          {
            title: "DEEP",
            url: "/imageCard",
            component: (
              <>
                <S.TabText>이미지 명함</S.TabText>
              </>
            ),
          },
          {
            title: "DEEP",
            url: "remeberTemplat",
            component: (
              <>
                <S.TabText>기억중인 명함</S.TabText>
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
              ))}
        </S.CardWrapper>
      </S.CardListContainer>
    </>
  );
};

export default CardList;
