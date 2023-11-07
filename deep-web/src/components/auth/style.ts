import styled from "styled-components";
import { DefaultBox } from "../../styles/default";

export const OAuthContainer = styled(DefaultBox)`
  min-height: calc(100vh - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DeepLogoImg = styled.img<{ src: string }>`
  margin-top: 20vh;
  margin-bottom: 20px;
`;

export const OAuthButton = styled.img`
  margin-top: 40vh;
  cursor: pointer;
`;
