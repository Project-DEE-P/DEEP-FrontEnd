import styled, { css } from "styled-components";
import { DefaultBox } from "../../styles/default";

export const TemplateListContainer = styled.div`
  height: 100vh;
  padding: 30px;
  overflow-y: hidden;

  @media screen and (min-width: 1024px) {
    padding-left: 15vw;
    padding-right: 15vw;
    font-family: Pretendard;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-top: 0px;
  }
`;
export const TemplateRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
`;
export const TemplateTitleBlack = styled.div`
  font-size: 1.2em;
  color: black;
  font-family: "pretendard";
  font-weight: 600;
  @media screen and (min-width: 1024px) {
    color: #000;
    font-family: Pretendard;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    align-items: center;
  }
`;

export const TemplateTitleBlue = styled.div`
  font-size: 1.2em;
  color: #1775f9;
  font-family: "pretendard";
  font-weight: 600;
  margin-right: 0.5vh;
  @media screen and (min-width: 1024px) {
    color: #1775f9;
    font-family: Pretendard;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    display: flex;
    align-items: center;
  }
`;

export const TemplateTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  column-gap: 5px;
  padding-left: 30px;
  padding-right: 30px;
  @media screen and (min-width: 1024px) {
    width: 100vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    padding-left: 15vw;
    padding-right: 15vw;
    box-sizing: border-box;
  }
`;

export const TemplateOptionTitle = styled.p`
  color: #000000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
`;
export const TemplateOptionRequire = styled.p`
  color: #fb2047;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
`;
export const TemplateOptionTitleWraper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TemplateOptionInput = styled.input`
  ${(props) =>
    props.width === "small" &&
    css`
      width: 200px;
    `};
  ${(props) =>
    props.width === "large" &&
    css`
      width: 400px;
    `};

  height: 40px;
  border-color: #c1c7de;
  border-radius: 0.375rem;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0px 0px 0px 1px #cdd1dc;
  &:focus {
    border-color: #1775f9;
    border-width: 1px;
    outline: none;
  }
`;

export const TemplateOptionHelper = styled.p`
  color: #737992;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
`;

export const TemplateOptionWraper = styled.div`
  margin-right: 50px;
`;
export const TemplateInputWraper = styled.div``;

export const TemplatePreviewWraper = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
`;

export const TemplatePreviewCard = styled.div`
  width: 600px;
  height: 376px;
  background-color: #f8f8f8;
  padding: 40px;
  box-sizing: border-box;
`;
export const CardInfoWraper = styled.div`
  position: absolute;
`;
export const CardTitle = styled.p``;
export const CardName = styled.p`
  position: relative;
  top: 70px;
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const CardPosition = styled.p`
  position: relative;
  top: 35px;
  left: 80px;
  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const CardNumber = styled.p`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CardEmail = styled.p`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CardHomepage = styled.p`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CardDepartment = styled.p`
  position: relative;
  top: 85px;
  color: #3f86f8;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem;
`;

export const CardInfoBlue = styled.div`
  position: relative;
  top: 70px;
  color: #3f86f8;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 1.8rem;
`;
export const CardInfoBlack = styled.div`
  position: relative;
  top: 70px;
  color: #000000;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 1.8rem;
`;
