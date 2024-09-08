import { create } from "zustand";

interface NavState {
  isNavOpen: boolean;
  toggleNav: () => void;
}

const useNavStore = create<NavState>((set) => ({
  isNavOpen: false,
  toggleNav: () => set((state) => ({ isNavOpen: !state.isNavOpen })),
}));

export default useNavStore;
