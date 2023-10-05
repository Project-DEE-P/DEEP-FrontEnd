import React, { useState } from "react";
import * as s from "./style";
import AppHeader from "../../../components/layout/AppHeader";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/common/modal";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [hasToken, setHasToken] = useState<any>(false);
  const [showModal, setShowModal] = useState<any>(false);
  const navigation = useNavigate();

  const handleRememberClick = () => {
    setShowModal(true);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
  };

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
          <s.RememberButton onClick={handleRememberClick}>
            기억하기
          </s.RememberButton>
        </s.ButtonContainer>
        {showModal && (
          <Modal
            isOpen={showModal}
            onYes={handleModalConfirm}
            onNo={handleModalConfirm}
          />
        )}
      </s.PageContainer>
    </>
  );
};

export default Layout;
