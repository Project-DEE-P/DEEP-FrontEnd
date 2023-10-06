import React, { useEffect, useLayoutEffect, useState } from "react";
import * as s from "./style"
import { DefaultBox } from "../../../styles/default";
import AppHeader from "../../../components/layout/AppHeader";
import { useRecoilValue } from "recoil";
import oAuthInfoAtom from "../../../atoms/loginInfo";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/common/modal";


interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const loginInfo = useRecoilValue(oAuthInfoAtom);
  const [showModal, setShowModal] = useState<any>(false); 
    const navigation = useNavigate();

    const handleRememberClick = () => {
        setShowModal(true);
    }

    const handleModalConfirm = () => {
        setShowModal(false);
    }
    
    useEffect(() => {
        if (loginInfo == null) {
        navigation("/oauth");
        } else {
        console.log(loginInfo.access_token);
        // TODO: 로그인 정보로 데이터 불러와서 리스트 렌더링
        console.log("리스트 그리기 진행");
        }
    }, [loginInfo]);
  return (
    <>
      <AppHeader />
      <s.PageContainer>
        <s.NFCContainer>
          <s.NFCTitle>
            최희건 님의 <span style={{ color: "#1775F9" }}>DEE:P</span> 명함
          </s.NFCTitle>
        </s.NFCContainer>
        <s.CardContainer>
          <a>
            <img src="cardsample.svg" alt="error" />
          </a>
        </s.CardContainer>
        <s.MemoContainer>최희건님에 대한 메모를 남겨주세요.</s.MemoContainer>
        <s.ButtonContainer>
          <s.RememberButton onClick={handleRememberClick}>기억하기</s.RememberButton>
        </s.ButtonContainer>
        {showModal && (
            <Modal isOpen={showModal} onYes={handleModalConfirm} onNo={handleModalConfirm} />
        )}
      </s.PageContainer>
    </>
  );
};

export default Layout;