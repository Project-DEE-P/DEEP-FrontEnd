import React, { useEffect, useLayoutEffect, useState } from "react";
import * as s from "./style";
import * as S from "../../../components/template/style";
import { DefaultBox } from "../../../styles/default";
import Header from "../../../components/layout/Header";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import oAuthInfoAtom from "../../../atoms/loginInfo";
import cardIdAtom from "../../../atoms/cardid";
import CardTypeAtom from "../../../atoms/cardType";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../components/common/modal";
import { customAxios } from "../../../lib/customAxios";
import SampleCard from "../../../assets/img/SampleCard.svg";
import CardTemplate from "src/container/cardTemplate";
import axios from "axios";
interface Props {
  children: React.ReactNode;
}

interface CardProps {
  id: Number;
  uid: String;
  template: String;
  name: String;
  position: String;
  department: String;
  phone: String;
  email: String;
  github: String;
  createdDateTime: String;
  modifiedDateTime: String;
}

const LayoutForm = ({ children }: Props) => {
  const serverUrl = "https://api.ddeep.store";
  const loginInfo = useRecoilValue(oAuthInfoAtom);
  const [cardId, setCardId] = useRecoilState(cardIdAtom);
  const [cardType, setCardType] = useRecoilState(CardTypeAtom);
  const [showModal, setShowModal] = useState<any>(false);
  const [resTemple, setResTemple] = useState<any>([]);
  const [resImg, setResImg] = useState([]);

  const navigation = useNavigate();

  // 1) url로 Param 값을 type, id로 저장
  const { istemplate, id } = useParams();
  setCardId(Number(id));
  setCardType(String(istemplate).toUpperCase());
  console.log(cardType);

  // 2) 클릭했을 때 명함 기억하기 기능을 구현하기 위해 post 보냄 (type, id)
  const handleRememberClick = () => {
    const response = customAxios
      .post(`${serverUrl}/v2/api/remember`, {
        cardType: cardType,
        cardId: cardId,
      })
      .then((postResponse) => {
        console.log("User data sent to server:", postResponse.data);
      });
    console.log(response);
    navigation("/cardlist");
    if (loginInfo == null) {
      navigation("/oauth");
    } else {
      const response = customAxios
        .post(`${serverUrl}/v1/api/remember`, {
          cardType: cardType,
          cardId: cardId,
        })
        .then((postResponse) => {
          console.log("User data sent to server:", postResponse.data);
        });
      console.log(response);
      navigation("/cardlist");
    }
  };

  const handleModalConfirm = () => {
    setShowModal(false);
  };

  // 2) 카드를 get하기 위해 url에서 param 값을 뽑아(CardType) template형식인지 Image 형식인지 구하고 그거에 맞춰 요청 보냄
  useEffect(() => {
    console.log();
    if (cardType === "TEMPLATE") {
      const resTemple = axios
        .get(`${serverUrl}/v2/api/card/template/${cardId}`)
        .then((postResponse) => {
          setResTemple(postResponse.data);
          console.log("User data sent to server:", postResponse.data);
        });
    } else {
      const resImg = axios
        .get(`${serverUrl}/v2/api/card/Image/${cardId}`)
        .then((postResponse) => {
          setResImg(postResponse.data);
          console.log("User data sent to server:", postResponse.data);
        });
    }
  }, []);

  const showCardInfo = async () => {
    try {
      const response = await customAxios.get(
        `${serverUrl}/v1/api/card/showcard/${cardType}/${cardId}`
      );
      console.log(response);
      navigation(`/showcard/${cardType}/${cardId}`);
    } catch (err) {
      console.log(err);
      // navigation(`showCard/${param}`); // 호출 실패 해도 navigation 호출
    }
  };

  if (!isNaN(Number(id))) {
    setCardId(Number(id));
    console.log(`현재 파라미터값 : ${id}`);
  } else {
    navigation("/showCard");
    interface Props {
      children: React.ReactNode;
    }
  }
  console.log(resTemple);
  return (
    <>
      <Header />
      <s.PageContainer>
        <s.NFCContainer>
          <s.NFCTitle>
            최희건 님의 <span style={{ color: "#1775F9" }}>DEE:P</span> 명함
          </s.NFCTitle>
        </s.NFCContainer>
        <s.CardContainer>
          {cardType === "TEMPLATE" ? (
            <CardTemplate data={resTemple}></CardTemplate>
          ) : (
            <img src={""}></img>
          )}
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
