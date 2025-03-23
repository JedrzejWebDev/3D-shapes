import { create } from "zustand";

interface Store {
  shape: string;
  size: string;
  setShape: (shape: string) => void;
  setSize: (size: string) => void;
}

const useStore = create<Store>((set) => ({
  shape: "cube",
  size: "2",
  setShape: (shape) => set({ shape }),
  setSize: (size) => set({ size }),
}));

export default useStore;
