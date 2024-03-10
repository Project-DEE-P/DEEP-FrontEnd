import { atom, useRecoilState } from "recoil";

export const modalState = atom<boolean[]>({
    key: 'modalState',
    default: [],
});

export function useModalstate() {
    return useRecoilState(modalState);
}