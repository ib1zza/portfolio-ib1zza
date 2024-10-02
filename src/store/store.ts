import {create} from "zustand/react";


type Store = {
    isMainTransitionEnded: boolean
    endTransition: () => void
}

export const useAnimationStore = create<Store>((set) => ({
    isMainTransitionEnded: false,
    endTransition: () => set((state) => ({isMainTransitionEnded: true})),
}));
