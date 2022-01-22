import React from "react";
import classes from "./modal.module.css";
import { MealContext } from "../../context/context";
import { useContext } from "react";
import playBtn from '../../assets/icon-play.svg'

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
              <button type="button"><img src={playBtn} alt="play"/>{" "}Play video</button>
            </div>
          </div>
          <div className={classes.desc_container}>
            <div className={classes.ingr}>
              <h3>Ingredients</h3>
              <span>👉{strIngredient1}</span>
              <span>👉{strIngredient2}</span>
              <span>👉{strIngredient3}</span>
              <span>👉{strIngredient4}</span>
              <span>👉{strIngredient5}</span>
            </div>
            <div className={classes.instr}>
              {strInstructions && <p>{strInstructions}</p>}
              <span>Pasta</span>
              <span>Curry</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
