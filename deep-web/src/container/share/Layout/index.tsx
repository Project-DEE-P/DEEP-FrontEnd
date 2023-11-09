import React, { useEffect, useState } from "react";
import * as s from "./style";
import Header from "../../../components/layout/Header";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import oAuthInfoAtom from "../../../atoms/loginInfo";
import cardIdAtom from "../../../atoms/cardid";
import CardTypeAtom from "../../../atoms/cardType";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../components/common/modal";
import { customAxios } from "../../../lib/customAxios";
import SampleCard from "../../../assets/img/SampleCard.svg";
import CardTemplate from "src/container/cardTemplate";

interface Props {
  children: React.ReactNode;
}

const LayoutForm = ({ children }: Props) => {
  const serverUrl = "https://api.ddeep.store";
  const loginInfo = useRecoilValue(oAuthInfoAtom);
  const [cardId, setCardId] = useRecoilState(cardIdAtom);
  const [cardType, setCardType] = useRecoilState(CardTypeAtom);
  const [showModal, setShowModal] = useState<any>(false);
  const [cardData, setCardData] = useState<any>(null);
  const [imageWidth, setImageWidth] = useState<number>(0);

  const navigation = useNavigate();

  const { istemplate, id } = useParams();
  setCardId(Number(id));
  setCardType(String(istemplate).toUpperCase());

  const handleRememberClick = () => {
    customAxios
      .post(`${serverUrl}/v2/api/remember`, {
        cardType: cardType,
        cardId: cardId,
      })
      .then((postResponse) => {
        console.log("User data sent to server:", postResponse.data);
        navigation("/cardlist");
      });
  };

  const handleModalConfirm = () => {
    setShowModal(false);
  };

  useEffect(() => {
    axios
      .get(`${serverUrl}/v2/api/card/${cardType.toLowerCase()}/${cardId}`)
      .then((postResponse) => {
        setCardData(postResponse.data.data);
        console.log("User data sent to server:", postResponse.data);
      });
  }, [cardType, cardId]);

  const showCardInfo = () => {
    navigation(`/showcard/${cardType}/${cardId}`);
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const imageElement = event.target as HTMLImageElement;
    setImageWidth(imageElement.clientWidth);
  };

  if (!isNaN(Number(id))) {
    setCardId(Number(id));
  } else {
    navigation("/showCard");
  }

  return (
    <>
      <Header />
      <s.PageContainer>
        <s.NFCContainer>
          <s.NFCTitle>
            {cardData ? (
              `${cardData.name} 님의 DEE:P 명함`
            ) : (
              "명함 정보를 불러오는 중..."
            )}
          </s.NFCTitle>
        </s.NFCContainer>
        <s.CardContainer>
          {cardData ? (
            cardType === "TEMPLATE" ? (
              <CardTemplate data={cardData} />
            ) : (
              <s.ResponsiveImage
                src={SampleCard}
                alt="Sample Image"
                onLoad={handleImageLoad}
                width={imageWidth}
              />
            )
          ) : null}
        </s.CardContainer>
        <s.ButtonContainer>
          {cardData && (
            <s.RememberButton onClick={handleRememberClick}>
              기억하기
            </s.RememberButton>
          )}
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
