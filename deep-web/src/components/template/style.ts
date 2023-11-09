import styled, { css } from "styled-components";

export const TemplateListContainer = styled.div`
  height: 100vh;
  padding: 30px;
  overflow-y: hidden;
  @media screen and (max-width: 1024px) {
    height: 40vh;
    padding-left: 10vw;
    padding-right: 10vw;
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

export const TemplateComponentWraper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 5px;
  padding-left: 15vw;
  padding-right: 15vw;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding-left: 0vw;
    padding-right: 0vw;
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
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 1024px) {
    ${(props) =>
      props.width === "small" &&
      css`
        width: 150px;
      `};
    ${(props) =>
      props.width === "large" &&
      css`
        width: 250px;
      `};
    height: 35px;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
  }
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
  @media screen and (max-width: 1024px) {
    margin-right: 10px;
  }
`;
export const TemplateInputWraper = styled.div`
  margin-top: 5vh;
`;

export const TemplatePreviewWraper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  @media screen and (max-width: 1024px) {
    height: 40vh;
    align-items: flex-start;
    padding: 10vw;
  }
`;

export const TemplatePreviewCard = styled.div`
  width: 600px;
  height: 376px;
  background-color: #f8f8f8;
  padding: 40px;
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    padding: 10px;
    padding-left: 20px;
    width: 300px;
    height: 188px;
  }
`;
export const CardInfoWraper = styled.div``;
export const CardTitle = styled.p``;
export const CardName = styled.p`
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const CardPosition = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
    margin: 5px;
  }
`;

export const CardNumber = styled.p`
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
    margin: 5px;
  }
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
  color: #3f86f8;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.5rem;
  margin-top: 100px;
  @media screen and (max-width: 1024px) {
    margin-top: 0px;
    font-size: 1rem;
  }
`;

export const CardInfoBlue = styled.div`
  color: #3f86f8;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 1.8rem;
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    height: 1.2rem;
  }
`;
export const CardInfoBlack = styled.div`
  color: #000000;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 1.8rem;
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    height: 1.2rem;
  }
`;

export const CreateTemplate = styled.button`
  width: 400px;
  height: 50px;
  border-radius: 0.375rem;
  border-style: solid;
  border-width: 1px;
  background: #1775f9;
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  &:focus {
    border-color: #1775f9;
    border-width: 1px;
    outline: none;
  }
`;
