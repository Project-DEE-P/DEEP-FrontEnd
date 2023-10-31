import styled from "styled-components";
import { DefaultBox } from "../../styles/default";

export const OAuthContainer = styled(DefaultBox)`
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const DeepLogoImg = styled.img<{ src: string }>`
  margin-bottom: 10vh;
  margin-top: 10vh;

  @media (max-width: 768px) {
    margin-bottom: 5vh;
    margin-top: 5vh;
  }
`;

export const OAuthButton = styled.img``;