import { useEffect } from "react";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "../../constants/Auth/auth.constants";
import Token from "src/lib/Token/Token";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { tokenDecode } from "src/utils/Auth/tokenDecode";

export function useSocialLogin() {
    const navigate = useNavigate();
    const { search } = useLocation();
    const { accessToken, refreshToken } = queryString.parse(search);

    useEffect(() => {
        if (accessToken && refreshToken) {
            Token.setToken(ACCESS_TOKEN_KEY, accessToken.toString());
            Token.setToken(REFRESH_TOKEN_KEY, refreshToken.toString());

            const jwtDecode = tokenDecode("access", "authority");
            if (jwtDecode === "MEMBER") {
                navigate("/")
            }
        }
    }, [accessToken, refreshToken, navigate])
}