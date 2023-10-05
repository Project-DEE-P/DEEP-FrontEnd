import { atom } from "recoil";

const oAuthInfo = atom<LoginInfo | null>({
  key: "oAuthInfo",
  default: {
    oAuthId: "adas",
  },
});

export type LoginInfo = {
  oAuthId: string;
};

export default oAuthInfo;
