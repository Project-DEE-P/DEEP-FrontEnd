import React from "react";
import OAuth from "../../components/auth/index";
import Login from "../../components/common/LoginButton";
import styled from "styled-components";

export default function OAuthPage() {
  return (
    <OAuthContainer>
      <OAuth />
    </OAuthContainer>
  );
}

const OAuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`