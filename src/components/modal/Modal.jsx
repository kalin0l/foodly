import React from "react";
import classes from "./modal.module.css";
import { MealContext } from "../../context/context";
import { useContext } from "react";
import playBtn from "../../assets/icon-play.svg";

export default function Modal({ children }) {
  const { displayedMeal, setIsDisplayed, isDisplayed } =
    useContext(MealContext);
  console.log(displayedMeal);
  const {
    strMealThumb,
    strMeal,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strInstructions,
  } = displayedMeal;

  return (
    <div
      className={`${isDisplayed ? classes.modal : classes.none}`}
      onClick={() => setIsDisplayed(false)}
    >
      <section className={classes.modal_main}>
        <div className={classes.main_container}>
          <div>
            <img src={strMealThumb} alt={strMeal} className={classes.img} />
            <div className={classes.heading_info}>
              <h1>{strMeal}</h1>
              <button type="button">
                <img src={playBtn} alt="play" /> Play video
              </button>
            </div>
          </div>
          <div className={classes.desc_container}>
            <div className={classes.ingr}>
              <h3>Ingredients</h3>
              {strIngredient1 ? (
                <span>👉{strIngredient1}</span>
              ) : (
                <span>👉 penne rigate</span>
              )}
              {strIngredient2 ? (
                <span>👉{strIngredient2}</span>
              ) : (
                <span>👉 penne rigate</span>
              )}
              {strIngredient3 ? (
                <span>👉{strIngredient3}</span>
              ) : (
                <span>👉 penne rigate</span>
              )}
              {strIngredient4 ? (
                <span>👉{strIngredient4}</span>
              ) : (
                <span>👉 penne rigate</span>
              )}
              {strIngredient5 ? (
                <span>👉{strIngredient5}</span>
              ) : (
                <span>👉 penne rigate</span>
              )}
            </div>
            <div className={classes.instr}>
              <h3>instructions</h3>
              {strInstructions ? (
                <p>{strInstructions}</p>
              ) : (
                <p>
                  Bring a large pot of water to a boil. Add kosher salt to the
                  boiling water, then add the pasta. Cook according to the
                  package instructions, about 9 minutes.\r\nIn a large skillet
                  over medium-high heat, add the olive oil and heat until the
                  oil starts to shimmer. Add the garlic and cook, stirring,
                  until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red
                  chile flakes, Italian seasoning and salt and pepper to taste.
                  Bring to a boil and cook for 5 minutes. Remove from the heat
                  and add the chopped basil.\r\nDrain the pasta and add it to
                  the sauce. Garnish with Parmigiano-Reggiano flakes and more
                  basil and serve warm.
                </p>
              )}
              <span>Pasta</span>
              <span>Curry</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
