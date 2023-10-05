import { useEffect } from "react";
import * as S from "./style";
import AppHeader from "../layout/AppHeader";
import DeepLogo from "../../assets/img/DeepLogo.svg";
import OAuthBtn from "../../assets/img/OAuthBtn.svg";
import { useRecoilState } from "recoil";
import loginInfoAtom from "../../atoms/loginInfo";
import { useNavigate } from "react-router-dom";
import config from "../../config/config.json";

// TODO: OAuth 관련 로직 리팩토링
const OAuth: React.FC = () => {
  const REDIRECT_URI = "http://localhost:3000/oauth";
  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.oauth_client_id}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email`;
  const [_, setLoginInfo] = useRecoilState(loginInfoAtom);
  const navigation = useNavigate();
  const oAuthHandler = () => {
    window.location.assign(oAuthURL);
  };

  useEffect(() => {
    // TODO: URL 파싱 리팩토링 진행
    const url = new URL(window.location.href);
    const accessToken = url.hash.substring(1).split("&")[0].split("=")[1];
    if (accessToken) {
      try {
        setLoginInfo({
          access_token: accessToken,
        });
        navigation("/showCard");
      } catch (error) {
        console.log("OAuth token expired");
      }
    }
  }, []);

  return (
    <>
      <S.OAuthContainer>
        <S.DeepLogoImg src={DeepLogo}></S.DeepLogoImg>
        <S.OAuthButton src={OAuthBtn} onClick={oAuthHandler}></S.OAuthButton>
        {/* <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        /> */}
      </S.OAuthContainer>
    </>
  );
};

export default OAuth;
