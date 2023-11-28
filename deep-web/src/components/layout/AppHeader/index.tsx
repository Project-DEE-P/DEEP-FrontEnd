import React, { useState } from "react";
import * as a from "./style";
import { Link } from "react-router-dom";
import DeepLogoImg from "../../../assets/img/DeepLogo.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Deep from "../../../assets/img/DeepLogo.svg";

const AppHeader = () => {
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
    <a.HeaderContainer>
      <a.AppHeaderBox>
        <Link to="/">
          <img src={Deep} alt="error" width={100}/>
        </Link>
        <a.HeaderButtonBox>
          <button onClick={() => handleNavigate("/template")}>
            <a.HeaderButton>
              <div>명함 제작</div>
            </a.HeaderButton>
          </button>
          <button onClick={() => handleNavigate("/cardlist")}>
            <a.HeaderButton>
              <div>명함 관리</div>
            </a.HeaderButton>
          </button>
          <button onClick={token ? handleLogout : () => handleNavigate("/oauth")}>
            <a.HeaderButton>
              <div>{getButtonText()}</div>
            </a.HeaderButton>
          </button>
        </a.HeaderButtonBox>
      </a.AppHeaderBox>
  </a.HeaderContainer>
  );
};

export default AppHeader;
