import { atom } from "recoil";

const oAuthInfo = atom<LoginInfo | null>({
  key: "oAuthInfo",
  default: null,
});

export type LoginInfo = {
  access_token: string;
};

export default oAuthInfo;
