import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const cardId = atom<number>({
  key: "cardId",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export function useCardId() {
  return useRecoilState(cardId);
}

export default cardId;
