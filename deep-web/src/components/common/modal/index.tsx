import React, { useState } from "react";
import * as m from "./style";
import { useNavigate } from "react-router-dom";
import { modalState, useModalstate } from "../../../atoms/modalState";

interface Props {
  isOpen: boolean;
  onYes: () => void;
  onNo: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, onYes, onNo }) => {
  const navigation = useNavigate();
  const [modalStack, setModalStack] = useModalstate();

  // 모달 닫기 함수
  const closeModal = () => {
    onNo();
  };

  const handleYes = () => {
    // if (토큰있다) {
    //   navigation('/다음페이지'); // 다음 페이지로 이동
    // } else {
    //   navigation('/signin'); // 로그인 페이지로 이동
    // }
    closeModal(); // 모달 닫기
  };

  const handleNo = () => {
    closeModal(); // 모달 닫기
  };

  return (
    <>
      {isOpen && (
        <m.ModalOverlay style={{ display: 'flex' }}>
          <m.ModalContent>
            <p>기억하시겠습니까?</p>
            <m.ButtonContainer>
              <m.YesButton onClick={handleYes}>예</m.YesButton>
              <m.NoButton onClick={handleNo}>아니요</m.NoButton>
            </m.ButtonContainer>
          </m.ModalContent>
        </m.ModalOverlay>
      )}
    </>
  );
};

export default Modal;