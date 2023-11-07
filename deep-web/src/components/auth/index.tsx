import { useEffect } from "react";
import * as S from "./style";
import DeepLogo from "../../assets/img/DeepLogo.svg";
import OAuthBtn from "../../assets/img/OAuthBtn.svg";

function OAuth() {
  const serverUrl = "https://api.ddeep.store";
  const handleLoginClick = () => {
    window.location.href = `${serverUrl}/v1/api/auth/google`;
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
