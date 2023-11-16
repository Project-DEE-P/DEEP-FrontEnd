import React, { useEffect } from "react";
import * as S from "./style";
import "aos/dist/aos.css";
import IntroText from "../../assets/img/IntroText.svg";
import IntroMockup from "../../assets/img/Mockup.svg";
import Playstore from "../../assets/img/PlaystoreButton.svg";
import SecondText from "../../assets/img/SecondText.svg";
import NFC from "../../assets/img/NFC.svg";
import CardMockup from "../../assets/img/MockUpCard.svg";
import ForthMockup from "../../assets/img/ForthMo.png";
import ForthText from "../../assets/img/ForthText.png";
import AOS from "aos";
import { toast } from "react-toastify"

import { Mobile, Desktop } from "../../hooks/useMediaQuery";

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <Desktop>
        <S.IntroContainer>
          <S.FirstContainer>
            <S.FirstTextWraper>
              <S.IntroTextImg src={IntroText} data-aos="fade-up" />
              <S.FirstText data-aos="fade-up">
                가져다 대기만 해도 명함이 내 손에 <br></br>NFC 명함 DEE:P으로
                쉽게 명함을 주고받으세요
              </S.FirstText>
              <S.GooglePlay src={Playstore} data-aos="fade-up"></S.GooglePlay>
            </S.FirstTextWraper>
            <S.MockupImg
              src={IntroMockup}
              data-aos="fade-up"
              data-aos-delay="100"
            ></S.MockupImg>
          </S.FirstContainer>
          <S.SecondContainer>
            <S.IntroTextImg
              src={SecondText}
              data-aos="fade-up"
            ></S.IntroTextImg>
          </S.SecondContainer>
          <S.ThirdContainer>
            <S.ThirdPartWraper data-aos="fade-up">
              <S.ThirdTextWraper>
                <S.ThirdTitle>명함 공유</S.ThirdTitle>
                <S.ThirdText>
                  DEE:P 터치 한 번으로<br></br>쉬운 명함 공유
                </S.ThirdText>
              </S.ThirdTextWraper>
              <S.ThirdImgWraper>
                <S.NFCImg src={NFC} />
                <S.CardMockupImg src={CardMockup} />
              </S.ThirdImgWraper>
            </S.ThirdPartWraper>
            <S.ThirdPartWraper data-aos="fade-up">
              <S.ThirdTextWraper>
                <S.ThirdTitle>명함 편집</S.ThirdTitle>
                <S.ThirdText>
                  새로 발주할 필요 없이<br></br>간편한 명함 수정
                </S.ThirdText>
              </S.ThirdTextWraper>
            </S.ThirdPartWraper>
            <S.ThirdRightPartWraper data-aos="fade-up">
              <S.ThirdTextRightWraper>
                <S.ThirdTitle>명함 관리</S.ThirdTitle>
                <S.ThirdRightText>
                  카테고리별로 정리된<br></br>디지털 명함첩
                </S.ThirdRightText>
              </S.ThirdTextRightWraper>
            </S.ThirdRightPartWraper>
            <S.ForthContainer>
              <S.ForthMockup src={ForthText} data-aos="fade-up"></S.ForthMockup>
              <S.ForthMockup
                src={ForthMockup}
                data-aos="fade-up"
              ></S.ForthMockup>
            </S.ForthContainer>
          </S.ThirdContainer>
        </S.IntroContainer>
      </Desktop>
      <Mobile>
        <S.IntroContainer>
          <S.FirstContainer>
            <S.FirstTextWraper>
              <S.IntroTextImg src={IntroText} data-aos="fade-up" />
              <S.FirstText data-aos="fade-up">
                가져다 대기만 해도 명함이 내 손에 <br></br>NFC 명함 DEE:P으로
                쉽게 명함을 주고받으세요
              </S.FirstText>
              <S.GooglePlay src={Playstore} data-aos="fade-up"></S.GooglePlay>
            </S.FirstTextWraper>
            <S.MockupImg
              src={IntroMockup}
              data-aos="fade-up"
              data-aos-delay="100"
            ></S.MockupImg>
          </S.FirstContainer>
          <S.SecondContainer>
            <S.IntroTextImg
              src={SecondText}
              data-aos="fade-up"
            ></S.IntroTextImg>
          </S.SecondContainer>
          <S.ThirdContainer>
            <S.ThirdPartWraper data-aos="fade-up">
              <S.ThirdTextWraper>
                <S.ThirdTitle>명함 공유</S.ThirdTitle>
                <S.ThirdText>
                  DEE:P 터치 한 번으로<br></br>쉬운 명함 공유
                </S.ThirdText>
              </S.ThirdTextWraper>
              <S.ThirdImgWraper>
                <S.NFCImg src={NFC} />
                <S.CardMockupImg src={CardMockup} />
              </S.ThirdImgWraper>
            </S.ThirdPartWraper>
            <S.ThirdPartWraper data-aos="fade-up">
              <S.ThirdTextWraper>
                <S.ThirdTitle>명함 편집</S.ThirdTitle>
                <S.ThirdText>
                  새로 발주할 필요 없이<br></br>간편한 명함 수정
                </S.ThirdText>
              </S.ThirdTextWraper>
            </S.ThirdPartWraper>
            <S.ThirdRightPartWraper data-aos="fade-up">
              <S.ThirdTextRightWraper>
                <S.ThirdTitle>명함 관리</S.ThirdTitle>
                <S.ThirdRightText>
                  카테고리별로 정리된<br></br>디지털 명함첩
                </S.ThirdRightText>
              </S.ThirdTextRightWraper>
            </S.ThirdRightPartWraper>
            <S.ForthContainer>
              <S.ForthMockup src={ForthText} data-aos="fade-up"></S.ForthMockup>
              <S.ForthMockup
                src={ForthMockup}
                data-aos="fade-up"
              ></S.ForthMockup>
            </S.ForthContainer>
          </S.ThirdContainer>
        </S.IntroContainer>
      </Mobile>
    </>
  );
};

export default Intro;
