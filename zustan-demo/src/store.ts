import { create } from "zustand";

type CounterStore = {
    count: number,
    increment: () => void;
    decrement: () => void;
}

export const useCounter = create<CounterStore>((set) => ({
    count: 10,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),

}))