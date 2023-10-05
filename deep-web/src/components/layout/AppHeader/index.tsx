import React from "react";
import * as a from "./style";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.svg"

const AppHeader = () => {
    return (
        <a.HeaderContainer>
            <a.AppHeaderBox>
                <div>
                    <a>
                        <img src="/logo.svg" alt="deep_logo" />
                    </a>
                </div>
            </a.AppHeaderBox>
        </a.HeaderContainer>
    )
}

export default AppHeader;