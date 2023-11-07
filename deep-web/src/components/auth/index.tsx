import { useEffect } from "react";
import * as S from "./style";
import DeepLogo from "../../assets/img/DeepLogo.svg";
import OAuthBtn from "../../assets/img/OAuthBtn.svg";

function OAuth() {
  const handleLoginClick = () => {
    window.location.href = "http://10.80.161.125:8081/v1/api/auth/google";
  };

  return (
    <>
    <S.OAuthContainer>
      <S.DeepLogoImg src={DeepLogo}></S.DeepLogoImg>
      <S.OAuthButton src={OAuthBtn} onClick={handleLoginClick} />
    </S.OAuthContainer>
  </>
  );
}

export default OAuth;
