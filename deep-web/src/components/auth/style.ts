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
  margin-bottom: 40vh;
  margin-top: 40vh;
`;

export const OAuthButton = styled.img``;
