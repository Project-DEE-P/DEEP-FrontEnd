import React from "react";
import OAuth from "../../components/auth/index";
import Login from "../../components/common/LoginButton";
import styled from "styled-components";
import Header from "src/components/layout/Header";

export default function OAuthPage() {
  return (
    <>
      <Header />
      <OAuth />
    </>
  );
}
