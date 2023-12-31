import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import DeepLogo from "../../assets/img/DeepLogo.svg";
import OAuthBtn from "../../assets/img/OAuthBtn.svg";

function OAuth() {
  const serverUrl = "https://api2.ddeep.store:444";
  const navigation = useNavigate();
  
  const handleLoginClick = () => {
    window.location.href = `${serverUrl}/v1/api/auth/google`;
  };
 
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("Token");    

    if (token) {
      localStorage.setItem("Token", token);
      navigation("/");

    }
  }, [navigation]);

  return (
    <>
      <S.OAuthContainer>
        <S.DeepLogoImg src={DeepLogo} />
        <S.OAuthButton src={OAuthBtn} onClick={handleLoginClick} />
      </S.OAuthContainer>
    </> 
  );
}

export default OAuth;
