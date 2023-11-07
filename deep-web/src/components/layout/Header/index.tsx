import React from "react";
import * as _ from "./style";
import Deep from "../../../assets/img/DeepLogo.svg";
import { useNavigate } from "react-router-dom";
import AppHeader from "../AppHeader";
import { Mobile, Desktop } from "../../../hooks/useMediaQuery";
// import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  //   const user = useSelector((state: any) => state.user);x`
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <>
      <Desktop>
        <_.HeaderContainer>
          <_.AppHeaderBox>
            <a href="/">
              <img src={Deep} alt="error" />
            </a>
            <_.HeaderButtonBox>
              <button onClick={() => handleNavigate("/template")}>
                <_.HeaderButton>
                  <div>명함 제작</div>
                </_.HeaderButton>
              </button>
              <button onClick={() => handleNavigate("/cardlist")}>
                <_.HeaderButton>
                  <div>명함 관리</div>
                </_.HeaderButton>
              </button>
              <button onClick={() => handleNavigate("/oauth")}>
                <_.HeaderButton>
                  <div>로그인</div>
                </_.HeaderButton>
              </button>
            </_.HeaderButtonBox>
          </_.AppHeaderBox>
        </_.HeaderContainer>
      </Desktop>
      <Mobile>
        <AppHeader></AppHeader>
      </Mobile>
    </>
  );
};

export default Header;
