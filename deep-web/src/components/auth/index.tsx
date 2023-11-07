import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // react-router-dom의 useHistory를 가져옴
import * as S from "./style";
import DeepLogo from "../../assets/img/DeepLogo.svg";
import OAuthBtn from "../../assets/img/OAuthBtn.svg";
import Header from "../layout/Header";

function OAuth() {
  const serverUrl = "https://api.ddeep.store";
  const navigation = useNavigate();

  const handleLoginClick = () => {
    window.location.href = `${serverUrl}/v1/api/auth/google`;
  };
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);

      navigation("/");
    }
  }, [navigation]);

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
