import React, { useState } from "react";
import * as s from "./style"
import AppHeader from "../../../components/layout/AppHeader";
import { useNavigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const [hasToken, setHasToken] = useState<any>(false);
    const [showModal, setShowModal] = useState<any>(false); 
    const navigation = useNavigate();

    const handleRememberClick = () => {
        if (!hasToken) {
            setShowModal(false);
        } else {
            navigation("/");
        }
    }

    const handleModalConfirm = () => {
        setShowModal(false);
    }

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
          // 모달 컴포넌트를 여기에 추가
          <div className="modal">
            <p>토큰이 없습니다. 로그인이 필요합니다.</p>
            <button onClick={handleModalConfirm}>확인</button>
          </div>
        )}
      </s.PageContainer>
    </>
    )
}

export default Layout;