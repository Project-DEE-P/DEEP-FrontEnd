import React from "react";
import * as a from "./style";
import { Link } from "react-router-dom";
import DeepLogoImg from "../../../assets/img/DeepLogo.svg";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <a.HeaderContainer>
      <a.AppHeaderBox>
        <a href="/">
          <a.LogoImg src={DeepLogoImg} alt="error" />
        </a>
        <a.HeaderButtonBox>
{/*           <button onClick={() => handleNavigate("/template")}>
            <a.HeaderButton>
              <div>명함 제작</div>
            </a.HeaderButton>
          </button> */}
          <button onClick={() => handleNavigate("/cardlist")}>
            <a.HeaderButton>
              <div>명함 관리</div>
            </a.HeaderButton>
          </button>
          <button onClick={() => handleNavigate("/oauth")}>
            <a.HeaderButton>
              <div>로그인</div>
            </a.HeaderButton>
          </button>
        </a.HeaderButtonBox>
      </a.AppHeaderBox>
    </a.HeaderContainer>
  );
};

export default AppHeader;
