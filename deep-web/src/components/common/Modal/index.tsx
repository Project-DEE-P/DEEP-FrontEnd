import React, { useState } from "react";
import * as m from "./style";
import { useNavigate } from "react-router-dom";
import { modalState, useModalstate } from "../../../atoms/modalState";

interface Props {
  isOpen: boolean; // 모달의 열림/닫힘 상태를 관리하는 prop
  onYes: () => void;
  onNo: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, onYes, onNo }) => {
  const navigation = useNavigate();
  const [modalStack, setModalStack] = useModalstate();

  // 모달 닫기 함수
  const closeModal = () => {
    // 모달 닫기 로직 추가
    // 예를 들어, setModalStack를 사용하여 modalStack 상태를 업데이트하거나,
    // 상위 컴포넌트에서 isOpen 상태를 업데이트하는 방법 중 하나를 선택합니다.
    onNo();
  };

  const handleYes = () => {
    // 토큰 확인 논리 추가
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

  // isOpen prop을 기반으로 모달 열림/닫힘 상태를 제어
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
