import React from "react";
import { MealContext } from "../../context/context";
import { useContext } from "react";
import classes from "../home/home.module.css";

export default function SearchFood() {
  const { food, setIsDisplayed, isDiplayed, setDisplayedMeal } = useContext(MealContext);

  const { meals } = food;

  const showMeal = (i) => {
    setIsDisplayed(!isDiplayed);
    setDisplayedMeal(meals[i]);
  };

  return (
    <div>
      <h1>Here's what we found:</h1>
      <div className={classes.container}>
        {meals &&
          meals.length > 0 &&
          meals.slice(0, 5).map((meal, i) => {
            const { strMealThumb, strMeal, strArea, strCategory, idMeal } =
              meal;
            console.log(meal);
            return (
              <div
                key={idMeal}
                className={classes.meals}
                onClick={() => showMeal(i)}
              >
                <img src={strMealThumb} alt={strMeal} />
                <h3>{strMeal}</h3>
                <div className={classes.details}>
                  <span>{strArea}</span>
                  <span>{strCategory}</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
