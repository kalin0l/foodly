import React from "react";
import Modal from "../modal/Modal";
import { useContext } from "react";
import { MealContext } from "../../context/context";
import classes from './card.module.css'

export default function Card() {
  const { displayedMeal } = useContext(MealContext);
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
    <Modal>
      <section>
        <div className="main_container">
          <div>
            <img src={strMealThumb} alt={strMeal} />
            <h1>{strMeal}</h1>
          </div>
          <div className="desc_container">
            <div className="ingr">
              <h3>Ingredients</h3>
              <span>{strIngredient1}</span>
              <span>{strIngredient2}</span>
              <span>{strIngredient3}</span>strIngredient
              <span>{strIngredient4}</span>
              <span>{strIngredient5}</span>
            </div>
            <div className="instr">
              {strInstructions && <p>{strInstructions}</p>}
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
}
