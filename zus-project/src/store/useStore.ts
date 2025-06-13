import { create } from "zustand";

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instruction: string;
}

interface RecipeStore {
    recipes: Recipe[];
    addRecipe: (rec: Recipe) => void;
    removeRecipe: (id: number) => void;
}

export const useStore = create<RecipeStore>((set) => ({
    recipes: [],
    addRecipe: (rec) => set((state) => ({ recipes: [...state.recipes, rec] })),
    removeRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((rec) => rec.id !== id) }))
}));