import React, { useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { DefaultBox } from "../../../styles/default";
import AppHeader from "../../../components/layout/AppHeader";
import { useRecoilValue } from "recoil";
import oAuthInfoAtom from "../../../atoms/loginInfo";
import { useNavigate } from "react-router-dom";

const PageContainer = styled(DefaultBox)`
  min-height: calc(100vh - 40px);
`;
const NFCContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-top: 18%;
`;

const NFCTitle = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: centet;
  margin-top: 10%;
  a {
    img {
      height: 190px;
    }
  }
`;
const MemoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-top: 15%;
`;

const WriteMemo = styled.p`
  color: var(--gray-300, #8c9aab);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25%;
`;

const RememberButton = styled.button`
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
  outline: none; /* 클릭 효과 제거 */
  cursor: pointer; /* 포인터 커서 표시 */
`;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const loginInfo = useRecoilValue(oAuthInfoAtom);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginInfo == null) {
      navigate("/oauth");
    } else {
      // TODO: 로그인 정보로 데이터 불러와서 리스트 렌더링
      console.log("리스트 그리기 진행");
    }
  }, [loginInfo]);
  return (
    <>
      <AppHeader />
      <PageContainer>
        <NFCContainer>
          <NFCTitle>
            최희건 님의 <span style={{ color: "#1775F9" }}>DEE:P</span> 명함
          </NFCTitle>
        </NFCContainer>
        <CardContainer>
          <a>
            <img src="cardsample.svg" alt="error" />
          </a>
        </CardContainer>
        <MemoContainer>최희건님에 대한 메모를 남겨주세요.</MemoContainer>
        <ButtonContainer>
          <RememberButton>기억하기</RememberButton>
        </ButtonContainer>
      </PageContainer>
    </>
  );
};

export default Layout;
