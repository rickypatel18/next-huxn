import { useStore } from "../store";
import { useEffect } from "react";

const Meals = () => {
  const { meals, searchQuery, setMeals, setSearchQuery } = useStore();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await response.json();
        setMeals(data.meals);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMeals();
  }, [setMeals]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-teal-600">Seafood Reciepes</h1>
      <input
        type="text"
        placeholder="search for a meal.."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-teal-400 rounded-lg p-3 mb-8 w-96 text-center"
      />

      <div>
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div key={meal.idMeal}>
              <h2 className="font-bold">{meal.strMeal}</h2>
              <img src={meal.strMealThumb} alt="" />
            </div>
          ))
        ) : (
          <p>No Meals found</p>
        )}
      </div>
    </div>
  );
};

export default Meals;
