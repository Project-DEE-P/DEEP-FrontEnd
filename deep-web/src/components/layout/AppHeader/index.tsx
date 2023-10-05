import React from "react";
import * as a from "./style";
import { Link } from "react-router-dom";
import DeepLogoImg from "../../../assets/img/DeepLogo.svg";

const AppHeader = () => {
  return (
    <a.HeaderContainer>
      <a.AppHeaderBox>
        <a.LogoImg src={DeepLogoImg} />
      </a.AppHeaderBox>
    </a.HeaderContainer>
  );
};

export default AppHeader;
