import { useState } from "react";
import { useStore } from "../store/useStore";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instruction: string;
}

const RecipeApp = () => {
  const { recipes, addRecipe, removeRecipe } = useStore();

  const [name, setName] = useState<string>("");
  const [ingredients, setingredients] = useState<string>("");
  const [instruction, setInstruction] = useState<string>("");
  const [editingrecipe, seteditingrecipe] = useState<Recipe | null>(null);

  const handleAddrecipe = () => {
    if (
      name.trim() == "" ||
      ingredients.trim() == "" ||
      instruction.trim() == ""
    ) {
      return;
    }
    addRecipe({
      id: Date.now(),
      name,
      ingredients: ingredients
        .split(",")
        .map((ingredients) => ingredients.trim()),
      instruction,
    });

    setName("");
    setingredients("");
    setInstruction("");
  };

  const handleEditRecipe = (recipe: Recipe) => {
    seteditingrecipe(recipe);
    setName(recipe.name);
    setingredients(recipe.ingredients.join(", "));
    setInstruction(recipe.instruction);
  };

  const handleUpdateRecipe = () => {
    if (
      name.trim() == "" ||
      ingredients.trim() == "" ||
      instruction.trim() == ""
    ) {
      return;
    }

    if (editingrecipe) {
      removeRecipe(editingrecipe.id);
      addRecipe({
        id: Date.now(),
        name,
        ingredients: ingredients
          .split(",")
          .map((ingredients) => ingredients.trim()),
        instruction,
      });

      seteditingrecipe(null);
    }
    setName("");
    setingredients("");
    setInstruction("");
  };
  
  const handleCancelEdit = () => {
    seteditingrecipe(null);
    setName("");
    setingredients("");
    setInstruction("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-lg">
        <h1>Recipe Book</h1>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Recipe Name"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-green-400 "
          />
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setingredients(e.target.value)}
            placeholder="Ingrdients here"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-green-400 "
          />
          <textarea
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            placeholder="instructions"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring-2 focus:ring-green-400 "
          />

          <div className="flex justify-between">
            {editingrecipe ? (
              <>
                <button
                  onClick={handleUpdateRecipe}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                >
                  update Recipe
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleAddrecipe}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                  Add recipe
                </button>
              </>
            )}
          </div>
        </div>

        <ul className="space-y-4">
          {recipes.map((recipe) => (
            <li key={recipe.id} className="p-4 bg-green-50 rounded">
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                {recipe.name}
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
              </p>

              <div className="flex justify-between">
                <button
                  onClick={() => handleEditRecipe(recipe)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() => removeRecipe(recipe.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeApp;
