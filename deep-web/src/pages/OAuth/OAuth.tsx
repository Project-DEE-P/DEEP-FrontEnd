import React from "react";
import OAuth from "../../components/auth/index";
import Login from "../../components/common/LoginButton";
import styled from "styled-components";
import Header from "src/components/layout/Header";

export default function OAuthPage() {
  return (
    <>
      <Header />
      <OAuthContainer>
        <OAuth />
        <Login />
      </OAuthContainer>
    </>
  );
}

const OAuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`