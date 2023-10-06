/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// import { CustomBtn } from "../common/Button/Btn";

interface UserData {
  name: string | null;
  email: string | null;
}

interface UserData {
  name: string | null;
  email: string | null;
}

function Google() {
  const [data, setData] = useState<UserData>({ name: null, email: null });
  const GOOGLE_CLIENT_ID =
    "777095937699-c7l8td7s6rtm8qpi3ejcf49tg4krcp6c.apps.googleusercontent.com";
  const REDIRECT_URI = "http://localhost:3000/oauth";
  const oAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email`;

  const oAuthHandler = () => {
    window.location.assign(oAuthURL);
    console.log(window.location);
  };

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const url = new URL(window.location.href);
      const accessToken = url.hash.substring(1).split("&")[0].split("=")[1];
      console.log(accessToken);
      // if (accessToken) {
      //   try {
      //     const response = await axios.get(
      //       `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`
      //     );
      //     setData(response.data);
      //   } catch (error) {
      //     console.log("OAuth token expired");
      //   }
      // }
    };

    handleOAuthCallback();
  }, []);

  return (
    <Container>
      <button onClick={oAuthHandler}>
        <span>구글로 계속하기</span>
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export default Google;