import React, { useState, useEffect, useRef } from "react";
import * as S from "./style";
import axios, { AxiosResponse } from "axios";
import Header from "../layout/Header";
import customAxios from "src/lib/customAxios";
import { Desktop, Mobile } from "src/hooks/useMediaQuery";
import domtoimage from "dom-to-image";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

const Template = () => {
  const [cardData, setCardData] = useState({
    template: "1",
    name: "",
    position: "",
    department: "",
    phone: "",
    email: "",
    github: "",
    image: "test",
  });
  const serverUrl = "https://api.ddeep.store";
  const domRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState<any>(null);
  const onChangeHandler = (e: any) => {
    setCardData((data) => {
      return {
        ...data,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    domtoimage.toBlob(document.querySelector(".card")!).then((blob) => {
      saveAs(blob, "card.png");
      setImage(blob);

      const formData = new FormData();
      formData.append("image", blob, "card.png");

      customAxios
        .post(`v1/api/images/image`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((postResponse) => {
          console.log(
            "User data sent to the server:",
            postResponse.data.data.ident
          );
          setCardData((data) => {
            return {
              ...data,
              image: postResponse.data.data.ident,
            };
          });
          SubmitDataHandler();
        })
        .catch((e) => {
          console.log(e);
        });
    });
  };

  useEffect(() => {
    console.log(cardData);
  }, [cardData]);

  const SubmitDataHandler = async () => {
    customAxios
      .post("/v2/api/card/template", cardData)
      .then((postResponse) => {
        console.log(postResponse);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Header />
      <S.TemplateInputWraper>
        <S.TemplateTitleWrapper>
          <S.TemplateTitleBlack>{cardData.name}님의</S.TemplateTitleBlack>
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
                name="phone"
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
                name="github"
                onChange={onChangeHandler}
              ></S.TemplateOptionInput>
              <S.TemplateOptionHelper>
                깃허브 또는 홈페이지를 입력해주세요
              </S.TemplateOptionHelper>
              <S.CreateTemplate onClick={handleSubmit}>
                생성하기
              </S.CreateTemplate>
            </S.TemplateOptionWraper>
          </S.TemplateListContainer>
          <S.TemplatePreviewWraper>
            <S.TemplateOptionTitle>명함 미리보기</S.TemplateOptionTitle>
            <S.TemplatePreviewCard ref={domRef} className="card">
              <S.CardDepartment>{cardData.department}</S.CardDepartment>
              <S.CardName>{cardData.name}</S.CardName>
              <S.CardPosition>{cardData.position}</S.CardPosition>
              <S.TemplateRowContainer>
                <S.CardInfoBlue>Tel.</S.CardInfoBlue>
                <S.CardInfoBlack>{cardData.phone}</S.CardInfoBlack>
              </S.TemplateRowContainer>
              <S.TemplateRowContainer>
                <S.CardInfoBlue>E-mail. </S.CardInfoBlue>
                <S.CardInfoBlack>{cardData.email}</S.CardInfoBlack>
              </S.TemplateRowContainer>
              <S.TemplateRowContainer>
                <S.CardInfoBlue>Portfolio. </S.CardInfoBlue>
                <S.CardInfoBlack>{cardData.github}</S.CardInfoBlack>
              </S.TemplateRowContainer>
            </S.TemplatePreviewCard>
          </S.TemplatePreviewWraper>
        </S.TemplateComponentWraper>
      </S.TemplateInputWraper>
    </>
  );
};

export default Template;
