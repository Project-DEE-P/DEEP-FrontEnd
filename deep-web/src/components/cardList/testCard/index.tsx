import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import CardTypeAtom from "../../../atoms/cardType";
import cardIdAtom from "../../../atoms/cardid";
import { useRecoilState } from "recoil";

interface Props {
  cardData: {
    id: number;
    uid: string;
    name: string;
    company: string;
    address: string;
    position: string;
    mobile: string;
    tel: string;
    email: string;
    fax: string;
    homepage: string;
    department: string;
    image: string;
    createdDateTime: string;
    modifiedDateTime: string;
  };
}

const TestCard: React.FC<Props> = ({ cardData }) => {
  const [cardType, setCardType] = useRecoilState(CardTypeAtom);
  const serverUrl = "https://api.ddeep.store";
  const [cardImage, setCardImage] = useState<string>("");
  const isValidUUID = (uuid: string) => {
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(uuid);
  };

  useEffect(() => {
    fetchCardImage();
  }, [cardData]);

  const fetchCardImage = async () => {
    if (!isValidUUID(cardData.image)) {
      console.error("유효하지 않은 UUID입니다:", cardData.image);
      return;
    }
  
    try {
      const response = await axios.get(
        `${serverUrl}/v1/api/images/${cardData.image}`
      );
      console.log(response);
      
  
      const responseData = response.data;
      if (!responseData || !responseData.image) {
        // console.log("올바르지 않은 서버 응답 형식입니다:", responseData);
        return;
      }
  
      const imageData = responseData.image;
      setCardImage(imageData);
    } catch (error) {
      console.error("카드 이미지 가져오기 오류:", error);
    }
  };

  return (
    <>
      <S.CardContainer>
        <S.CardNameWrapper>
          <S.CardNameText>{cardData.name}</S.CardNameText>
          <S.CardNameText>님의 명함</S.CardNameText>
          <S.CardDateText>
            {new Date(cardData.createdDateTime).toLocaleDateString()}
          </S.CardDateText>
        </S.CardNameWrapper>
        {/* {cardImage && (
          <S.SampleCardImg src={cardImage} alt="Sample Card" />
        )
        } */}
        <S.SampleCardImg src={`${serverUrl}/v1/api/images/${cardData.image}`} alt="BC"/>
      </S.CardContainer>
    </>
  );
};

export default TestCard;
