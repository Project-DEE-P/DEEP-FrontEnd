import styled from "styled-components";
import { DefaultBox } from "../../../styles/default";

export const PageContainer = styled(DefaultBox)`
  min-height: calc(100vh - 40px);
  overflow: hidden;
  padding-left: 15vw;
  padding-right: 15vw;
  box-sizing: border-box;
`;
export const NFCContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-top: 5%;
  @media screen and (max-width: 1024px) {
    text-align: start;
    display: flex;
    align-items: flex-start;
    margin-top: 30%;
  }
`;

export const NFCTitle = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  @media screen and (max-width: 1024px) {
    text-align: start;
    display: flex;
    align-items: flex-start;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  a {
    img {
      height: 190px;
    }
    @media screen and (max-width: 1024px) {
      display: flex;
      align-items: flex-start;
    }
  }
`;
export const MemoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-top: 15%;
`;

export const WriteMemo = styled.p`
  color: var(--gray-300, #8c9aab);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`;

export const RememberButton = styled.button`
  width: 328px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--blue-400, #4591fa);
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
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
export const TemplateRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
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
