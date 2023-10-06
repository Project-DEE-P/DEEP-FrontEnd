import React, { useEffect, useLayoutEffect, useState } from "react";
import * as s from "./style";
import { DefaultBox } from "../../../styles/default";
import AppHeader from "../../../components/layout/AppHeader";
import { useRecoilState, useRecoilValue } from "recoil";
import oAuthInfoAtom from "../../../atoms/loginInfo";
import cardIdAtom from "../../../atoms/cardid";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../components/common/modal";
import { customAxios } from "../../../lib/customAxios";
import axios from "axios";
import SampleCard from "../../../assets/img/SampleCard.svg";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const loginInfo = useRecoilValue(oAuthInfoAtom);
  const [param, setParam] = useRecoilState(cardIdAtom);
  const [showModal, setShowModal] = useState<any>(false);
  const navigation = useNavigate();

  const params = useParams();
  setParam(Number(params.id));
  console.log(`현재 파라미터값 : ${param}`);

  const handleRememberClick = () => {
    if (loginInfo == null) {
      navigation("/oauth");
    } else {
      console.log(loginInfo.access_token);
      // TODO: 로그인 정보로 데이터 불러와서 리스트 렌더링
      console.log("리스트 그리기 진행");
    }
  };

  const handleModalConfirm = () => {
    setShowModal(false);
  };

  useEffect(() => {
    navigation(`/showcard/${param}`);
    showCardInfo();
  }, [param]);

  const showCardInfo = () => {
    axios
      .get(`http://10.80.162.51:8080/v1/api/card/${param}`)
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      })
      .then(function () {});
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

export default Layout;
