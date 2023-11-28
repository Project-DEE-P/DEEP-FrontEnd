import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
  } from "../../constants/Auth/auth.constants";
  import Token from "../../lib/Token/Token";
  import { DecodeKeyType, DecodeType } from "../../types/Auth/auth.type";
  import { jwtDecode } from "jwt-decode";
  
  export const tokenDecode = (
    tokenType: "access" | "refresh",
    option: DecodeKeyType
  ) => {
    const token =
      tokenType === "access"
        ? Token.getToken(ACCESS_TOKEN_KEY)
        : Token.getToken(REFRESH_TOKEN_KEY);
  
    if (token) {
      return jwtDecode<DecodeType>(token)[option];
    }
    return;
  };