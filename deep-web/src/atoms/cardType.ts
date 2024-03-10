import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const cardType = atom<string>({
  key: "cardType",
  default: "image",
  effects_UNSTABLE: [persistAtom],
});

export function useCardType() {
  return useRecoilState(cardType);
}

export default cardType;
