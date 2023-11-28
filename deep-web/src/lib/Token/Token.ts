import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY
} from "../../constants/Auth/auth.constants"
import cookie from "../Cookie/Cookie"

interface Storage {
    getToken(key: string): string | undefined;
    setToken(key: string, value: string, expire?: Date): void;
    clearToken(): void;
    removeToken(key: string): void;
}

class Token implements Storage {
    public getToken(key: string): string | undefined {
      return cookie.getCookie(key);
    }
  
    public setToken(key: string, token: string, expire?: Date): void {
      cookie.setCookie(key, token, expire);
    }
  
    public clearToken() {
      cookie.removeCookie(ACCESS_TOKEN_KEY);
      cookie.removeCookie(REFRESH_TOKEN_KEY);
    }
  
    public removeToken(key: string) {
      cookie.removeCookie(key);
    }
  }
  
  export default new Token();