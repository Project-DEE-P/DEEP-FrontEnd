import React, { useState } from "react";
import * as _ from "./style";
import Deep from "../../../assets/img/DeepLogo.svg";
import { useNavigate } from "react-router-dom";
import AppHeader from "../AppHeader";
import { toast } from "react-toastify";
import { Mobile, Desktop } from "../../../hooks/useMediaQuery";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  const handleNavigate = (path: string) => {
    if (!token) {
      toast.error("로그인이 필요합니다. 로그인을 해주세요.");
    } else {
      navigate(path);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setToken(null);
    navigate("/");
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
              {token ? (
                <button onClick={handleLogout}>
                  <_.HeaderButton>
                    <div>로그아웃</div>
                  </_.HeaderButton>
                </button>
              ) : (
                <button onClick={() => navigate("/oauth")}>
                  <_.HeaderButton>
                    <div>로그인</div>
                  </_.HeaderButton>
                </button>
              )}
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
