import styled from "styled-components";

export const IntroContainer = styled.div``;

export const FirstContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(232, 241, 254, 1) 100%
  );
  padding-left: 15vw;
  padding-right: 15vw;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
`;
export const FirstTextWraper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const FirstText = styled.p`
  color: #000;

  font-family: Pretendard;
  font-size: 3vh;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const IntroTextImg = styled.img`
  width: 35vw;
`;
export const MockupImg = styled.img`
  width: 40vw;
  margin-top: 10vh;
`;
export const GooglePlay = styled.img`
  width: 10vw;
  margin-top: 3vh;
`;

export const SecondContainer = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #f8f8f8;
  padding-left: 15vw;
  padding-right: 15vw;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ThirdContainer = styled.div`
  width: 100vw;
  height: 185vh;
  background-color: #ffffff;
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 15vh;
  padding-bottom: 5vh;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ThirdPartWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ThirdRightPartWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const ThirdTitle = styled.h4`
  color: #1775f9;

  font-family: Pretendard;
  font-size: 3vh;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ThirdText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 5vh;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ThirdRightText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 5vh;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: end;
`;
export const ThirdTextWraper = styled.div``;
export const ThirdTextRightWraper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;
export const NFCImg = styled.img`
  height: 35vh;
  position: absolute;
`;
export const CardMockupImg = styled.img`
  height: 75vh;
  position: relative;
  top: 50px;
  &:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;
export const ThirdImgWraper = styled.div``;

export const ForthContainer = styled.div`
  width: 100vw;
  height: 60vh;
  background-color: #e8f1fe;
  padding-left: 15vw;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ForthMockup = styled.img`
  width: 40%;
`;
