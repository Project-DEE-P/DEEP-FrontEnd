import React, { useState } from "react";
import * as _ from "./style";
import { Link, useNavigate } from "react-router-dom";
import Deep from "../../../assets/img/DeepLogo.svg";
import AppHeader from "../AppHeader";
import { toast } from "react-toastify";
import { Mobile, Desktop } from "../../../hooks/useMediaQuery";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("Token"));

  const handleNavigate = (path: string) => {
    if (!token && path !== "/oauth") {
      toast.error("로그인이 필요합니다. 로그인을 해주세요.");
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("Token");
    setToken(null);
    navigate("/");
  };

  const getButtonText = () => {
    return token ? "로그아웃" : "로그인";
  };

  return (
    <>
      <Desktop>
        <_.HeaderContainer>
          <_.AppHeaderBox>
            <Link to="/">
              <img src={Deep} alt="error" />
            </Link>
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
              <button onClick={token ? handleLogout : () => handleNavigate("/oauth")}>
                <_.HeaderButton>
                  <div>{getButtonText()}</div>
                </_.HeaderButton>
              </button>
            </_.HeaderButtonBox>
          </_.AppHeaderBox>
        </_.HeaderContainer>
      </Desktop>
      <Mobile>
        <AppHeader />
      </Mobile>
    </>  
  );
};

export default Header;
