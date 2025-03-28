import {create} from "zustand/react";


type Store = {
    isMainTransitionEnded: boolean
    endTransition: () => void,
    isThemesMenuOpened: boolean,
    setThemesMenuOpened: (newValue: boolean) => void
}

export const useAnimationStore = create<Store>((set) => ({
    isMainTransitionEnded: false,
    endTransition: () => set((state) => ({isMainTransitionEnded: true})),
    isThemesMenuOpened: false,
    setThemesMenuOpened: (newValue: boolean) => set((state) => ({isThemesMenuOpened: newValue})),
}));
