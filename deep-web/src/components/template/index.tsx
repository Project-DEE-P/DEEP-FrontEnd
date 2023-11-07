import React, { useState, useEffect } from "react";
import * as S from "./style";
import axios, { AxiosResponse } from "axios";
import Header from "../layout/Header";
import customAxios, { templateAxios } from "src/lib/customAxios";
import { Desktop, Mobile } from "src/hooks/useMediaQuery";

const Template = () => {
  const [cardData, setCardData] = useState({
    name: "",
    position: "",
    department: "",
    number: 0,
    email: "",
    homepage: "",
  });

  const onChangeHandler = (e: any) => {
    setCardData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const requestBody = {
        template: "",
        name: cardData.name,
        position: cardData.position,
        department: cardData.department,
        phone: cardData.number,
        email: cardData.email,
        github: cardData.homepage,
      };

      const response = await customAxios.post("http://10.80.161.115:8082/v2/api/card/template", requestBody);

      if (response.status === 201) {
        console.log("[SUCCESS] Created");
      } else {
        console.log("[ERROR] Request failed");
      }
    } catch (error) {
      console.error("error", error);
    }
  }

  return (
    <>
      <Header />
      <S.TemplateInputWraper>
        <S.TemplateTitleWrapper>
          <S.TemplateTitleBlack>최희건님의</S.TemplateTitleBlack>
          <S.TemplateRowContainer>
            <S.TemplateTitleBlue>DEE:P</S.TemplateTitleBlue>
            <S.TemplateTitleBlack>명함 제작하기</S.TemplateTitleBlack>
          </S.TemplateRowContainer>
        </S.TemplateTitleWrapper>
        <S.TemplateComponentWraper>
          <S.TemplateListContainer>
            <S.TemplateOptionWraper>
              <S.TemplateOptionTitleWraper>
                <S.TemplateOptionTitle>이름</S.TemplateOptionTitle>
                <S.TemplateOptionRequire>*</S.TemplateOptionRequire>
              </S.TemplateOptionTitleWraper>
              <S.TemplateOptionInput
                width={"small"}
                name="name"
                onChange={onChangeHandler}
              ></S.TemplateOptionInput>
              <S.TemplateOptionHelper>
                이름을 입력해주세요
              </S.TemplateOptionHelper>
            </S.TemplateOptionWraper>
            <S.TemplateRowContainer>
              <S.TemplateOptionWraper>
                <S.TemplateOptionTitleWraper>
                  <S.TemplateOptionTitle>직책</S.TemplateOptionTitle>
                  <S.TemplateOptionRequire>*</S.TemplateOptionRequire>
                </S.TemplateOptionTitleWraper>
                <S.TemplateOptionInput
                  width={"small"}
                  name="position"
                  onChange={onChangeHandler}
                ></S.TemplateOptionInput>
                <S.TemplateOptionHelper>
                  직책/학교명을 입력해주세요
                </S.TemplateOptionHelper>
              </S.TemplateOptionWraper>
              <S.TemplateOptionWraper>
                <S.TemplateOptionTitleWraper>
                  <S.TemplateOptionTitle>부서</S.TemplateOptionTitle>
                  <S.TemplateOptionRequire>*</S.TemplateOptionRequire>
                </S.TemplateOptionTitleWraper>
                <S.TemplateOptionInput
                  width={"small"}
                  name="department"
                  onChange={onChangeHandler}
                ></S.TemplateOptionInput>
                <S.TemplateOptionHelper>
                  부서/전공명을 입력해주세요
                </S.TemplateOptionHelper>
              </S.TemplateOptionWraper>
            </S.TemplateRowContainer>
            <S.TemplateOptionWraper>
              <S.TemplateOptionTitleWraper>
                <S.TemplateOptionTitle>전화번호</S.TemplateOptionTitle>
                <S.TemplateOptionRequire>*</S.TemplateOptionRequire>
              </S.TemplateOptionTitleWraper>
              <S.TemplateOptionInput
                width={"large"}
                name="number"
                onChange={onChangeHandler}
              ></S.TemplateOptionInput>
              <S.TemplateOptionHelper>
                전화번호를 입력해주세요
              </S.TemplateOptionHelper>
            </S.TemplateOptionWraper>
            <S.TemplateOptionWraper>
              <S.TemplateOptionTitleWraper>
                <S.TemplateOptionTitle>이메일</S.TemplateOptionTitle>
                <S.TemplateOptionRequire>*</S.TemplateOptionRequire>
              </S.TemplateOptionTitleWraper>
              <S.TemplateOptionInput
                width={"large"}
                name="email"
                onChange={onChangeHandler}
              ></S.TemplateOptionInput>
              <S.TemplateOptionHelper>
                이메일을 입력해주세요
              </S.TemplateOptionHelper>
            </S.TemplateOptionWraper>
            <S.TemplateOptionWraper>
              <S.TemplateOptionTitleWraper>
                <S.TemplateOptionTitle>GitHub / HomePage</S.TemplateOptionTitle>
              </S.TemplateOptionTitleWraper>
              <S.TemplateOptionInput
                width={"large"}
                name="homepage"
                onChange={onChangeHandler}
              ></S.TemplateOptionInput>
              <S.TemplateOptionHelper>
                깃허브 또는 홈페이지를 입력해주세요
              </S.TemplateOptionHelper>
              <S.CreateTemplate onClick={handleSubmit}>생성하기</S.CreateTemplate>
            </S.TemplateOptionWraper>
          </S.TemplateListContainer>

          <S.TemplatePreviewWraper>
            <S.TemplateOptionTitle>명함 미리보기</S.TemplateOptionTitle>
            <S.TemplatePreviewCard>
              <S.CardInfoWraper>
                <S.CardDepartment>{cardData.department}</S.CardDepartment>
                <S.CardName>{cardData.name}</S.CardName>
                <S.CardPosition>{cardData.position}</S.CardPosition>
                <S.TemplateRowContainer>
                  <S.CardInfoBlue>Tel.</S.CardInfoBlue>
                  <S.CardInfoBlack>{cardData.number}</S.CardInfoBlack>
                </S.TemplateRowContainer>
                <S.TemplateRowContainer>
                  <S.CardInfoBlue>E-mail. </S.CardInfoBlue>
                  <S.CardInfoBlack>{cardData.email}</S.CardInfoBlack>
                </S.TemplateRowContainer>
                <S.TemplateRowContainer>
                  <S.CardInfoBlue>Portfolio. </S.CardInfoBlue>
                  <S.CardInfoBlack>{cardData.homepage}</S.CardInfoBlack>
                </S.TemplateRowContainer>
              </S.CardInfoWraper>
            </S.TemplatePreviewCard>
          </S.TemplatePreviewWraper>
        </S.TemplateComponentWraper>
      </S.TemplateInputWraper>
    </>
  );
};

export default Template;
