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
  const serverUrl = "https://web.ddeep.store";
  const [cardImage, setCardImage] = useState<string>("");

  useEffect(() => {
    fetchCardImage();
  }, []);

  const fetchCardImage = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/v2/api/card/image/${cardType.toLowerCase()}/${cardData.id}`
      );
      setCardImage(response.data);
      console.log(cardData);
      console.log(cardData.image);
    } catch (error) {
      console.error("Failed to fetch card image:", error);
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
        {cardImage ? (
          <S.SampleCardImg src={cardImage} alt="Sample Card" />
        ) : (
          <S.SampleCardImg src={cardData.image} alt="Sample Card" />
        )}
      </S.CardContainer>
    </>
  );
};

export default TestCard;
