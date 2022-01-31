import React from "react";
import { MealContext } from "../../context/context";
import { useContext } from "react";
import classes from '../home/home.module.css';




export default function Template(){
    const { italianFood, seafood,setIsDisplayed,isDiplayed,setDisplayedMeal } = useContext(MealContext);
    const showItalian = (i) => {
        setIsDisplayed(!isDiplayed)
        setDisplayedMeal(italianFood.meals[i])
      }
      const showSeaFood = (i) => {
        setIsDisplayed(!isDiplayed)
        setDisplayedMeal(seafood.meals[i])
      }
    return (
        <>
        <div className={classes.main}>
      <h1 className={classes.seafood_heading}>🌊 DOWN FOR seafood tonight?</h1>
      <div className={classes.seafood}>
        {seafood &&
          seafood.meals &&
          seafood.meals.slice(0, 4).map((meal, id) => {
            const { strMealThumb, strMeal } = meal;
            return (
              <div key={id} className={classes.seameals} onClick={() => showSeaFood(id)} >
                <img src={strMealThumb} alt={strMeal} />
                <h3>{strMeal}</h3>
                <div className={classes.details}>
                  <span>Pasta</span>
                  <span>Curry</span>
                </div>
              </div>
            );
          })}
      </div>
      <h1 className={classes.italian_heading}>🍝 MAYBE some italian?</h1>
      <div className={classes.italian}>
        {italianFood &&
          italianFood.meals &&
          italianFood.meals.slice(0, 4).map((meal, id) => {
            const { strMealThumb, strMeal } = meal;
            return (
                <div key={id} className={classes.italianfood} onClick={() => showItalian(id)}>
                  <img src={strMealThumb} alt={strMeal} />
                  <h3>{strMeal}</h3>
                  <div className={classes.details}>
                    <span>Pasta</span>
                    <span>Curry</span>
                  </div>
                </div>
             
            );
          })}
      </div>
    </div>
            
        </>
    )


       
    
}