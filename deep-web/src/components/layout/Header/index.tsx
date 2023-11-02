import React from 'react';
import * as _ from "./style"
import Deep from "../../../assets/img/DeepLogo.svg"
// import { useSelector } from 'react-redux';

const Header = () => {
//   const user = useSelector((state: any) => state.user);

  return (
    <_.HeaderContainer>
      <_.AppHeaderBox>
        <a href="/">
            <img src={Deep} alt="error" />
        </a>
        <_.HeaderButtonBox>
            <a href="/business-card">
              <_.HeaderButton>
                <div>명함 제작</div>
              </_.HeaderButton>
            </a>
          <a href="/card-management">
            <_.HeaderButton>
              <div>명함 관리</div>
            </_.HeaderButton>
          </a>  
          <a href='/login'>
            <_.HeaderButton>
                <div>로그인</div>
            </_.HeaderButton>
        </a>    
        </_.HeaderButtonBox>
      </_.AppHeaderBox>
    </_.HeaderContainer>
  );
};

export default Header;
