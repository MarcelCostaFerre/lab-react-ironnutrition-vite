import "./App.css";
import { useState } from "react";
import FoodList from "./components/FoodList";
import SearchBar from "./components/SearchBar";
import foodsJson from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  //   const [foods, setFoods] = useState(foodsJson);
  //   const addNewFood = (newFood) => {
  //     // Create a new array
  //     const updatedFoods = [...foods, newFood]; // ESTO NO ES UN PUSH, es una copia del array anterior MAS la nueva película
  //     // const updatedMoviesData = [...moviesData, newMovie]

  //     setFoods(updatedFoods);

  //     // setMoviesData(updatedMoviesData)
  // };
  //   const deleteFood = (foodId) => {
  //     const updatedFoods = foods.filter((food) => {
  //       return foodId !== food.id
  //     })
  //     setFoods(updatedFoods)
  //   }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <SearchBar setFoods={setFoods} foods={foods} />
      <br />
      <FoodList foods={foods} />

      {/* <AddFoodForm addNewFood={addNewFood} />
      <h2>Food List</h2>
      {foods.map((food) => {
        return <FoodBox key={food.id} food={food} deleteFood={deleteFood} />;
      })} */}
    </div>
  );
}

export default App;
