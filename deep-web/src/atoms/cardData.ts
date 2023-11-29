import { atom } from 'recoil';

export const cardDataState = atom({
  key: 'cardDataState',
  default: {
    template: "1",
    name: "",
    position: "",
    department: "",
    phone: "",
    email: "",
    github: "",
    image: "",
  },
});