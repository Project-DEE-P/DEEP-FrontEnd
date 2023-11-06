import React, { useEffect, useLayoutEffect, useState } from "react";
import * as s from "./style";
import { DefaultBox } from "../../../styles/default";
import AppHeader from "../../../components/layout/AppHeader";
import Header from "../../../components/layout/Header";
import { useRecoilState, useRecoilValue } from "recoil";
import oAuthInfoAtom from "../../../atoms/loginInfo";
import cardIdAtom from "../../../atoms/cardid";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../components/common/modal";
import { customAxios } from "../../../lib/customAxios";
import SampleCard from "../../../assets/img/SampleCard.svg";

interface Props {
  children: React.ReactNode;
}

const LayoutForm = ({ children }: Props) => {
  const loginInfo = useRecoilValue(oAuthInfoAtom);
  const [param, setParam] = useRecoilState(cardIdAtom);
  const [showModal, setShowModal] = useState<any>(false);
  const navigation = useNavigate();

  const params = useParams();
  const id = Number(params.id);

  const handleRememberClick = () => {
    if (loginInfo == null) {
      navigation("/oauth");
    } else {
      console.log(loginInfo.access_token);
      console.log("리스트 그리기 진행");

      navigation("/cardlist");
    }
  };

  const handleModalConfirm = () => {
    setShowModal(false);
  };

  useEffect(() => {
    console.log(`현재 파라미터 값 : ${param}`);
    // navigation(`/showcard/${param}`);
    showCardInfo();
  }, [param]);

  const showCardInfo = async () => {
    try {
      const response = await customAxios.get(
        `http://172.16.1.21:8080/v1/api/card/${param}`
      );
      console.log(response);
      navigation(`/showcard/${param}`);
    } catch (err) {
      console.log(err);
      // navigation(`showCard/${param}`); // 호출 실패 해도 navigation 호출
    }
  };

  if (!isNaN(id)) {
    setParam(id);
    console.log(`현재 파라미터값 : ${id}`);
    showCardInfo();
  } else {
    navigation("/showCard");
    interface Props {
      children: React.ReactNode;
    }
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
          <img src={SampleCard} alt="error" />
        </s.CardContainer>
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

export default LayoutForm;
