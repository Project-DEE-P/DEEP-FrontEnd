import { atom } from "recoil";

const userInfoAtom = atom({
  key: "userInfo",
  default: {
    userId: "",
    password: "",
    pwCheck: "",
    name: "",
    email: "",
  },
});

export default userInfoAtom;