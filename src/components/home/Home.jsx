import React from "react";
import Header from "../header/Header";
import classes from "./home.module.css";
import { MealContext } from "../../context/context";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import Modal from "../modal/Modal";

export default function Home() {
  const { search, setSearch, italianFood, seafood, loading, food,setIsDisplayed,isDiplayed,setDisplayedMeal,displayedMeal } =
    useContext(MealContext);
  const { meals } = food;
  console.log(meals);
  const showMeal = (i) => {
    setIsDisplayed(!isDiplayed)
    setDisplayedMeal(meals[i])
  }

  const searchForFood = (
    <div>
      <h1>Here's what we found:</h1>
      <div className={classes.container}>
        {meals &&
          meals.length > 0 &&
          meals.slice(0, 5).map((meal, i) => {
            const { strMealThumb, strMeal, strArea, strCategory } = meal;
            return (
              <div key={i} className={classes.meals} onClick={() => showMeal(i)}>
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

  const templateFood = (
    <div className={classes.main}>
      <h1>down for seafood tonigth</h1>
      <div className={classes.seafood}>
        {seafood &&
          seafood.meals &&
          seafood.meals.slice(0, 4).map((meal, id) => {
            const { strMealThumb, strMeal } = meal;
            return (
              <div key={id} className={classes.seameals} onClick={() => showMeal(id)} >
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
      <h1>maybe some italian</h1>
      <div className={classes.italian}>
        {italianFood &&
          italianFood.meals &&
          italianFood.meals.slice(0, 4).map((meal, id) => {
            const { strMealThumb, strMeal } = meal;
            return (
                <div key={id} className={classes.italianfood} onClick={() => showMeal(id)}>
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
  );
  if (loading) {
    return (
      <section>
        <Header />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={classes.input}
        />
        <div className={classes.no_results}>
          <div className={classes.loader}>
            <span>
              <FaSearch />
            </span>
          </div>
          <p>
            Searching for delicious food!{" "}
            <span className={classes.yum}>Yum</span>
          </p>
          <button type="button">Yeah, sure</button>
        </div>
      </section>
    );
  }
  return (
    <section>
      <Header />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={classes.input}
      />
      {search.length > 0 ? searchForFood : templateFood}
      {displayedMeal !== [] && <Modal/>}
      {meals === null && (
        <div className={classes.no_results}>
          <p>
            No results found for {search}.
            <span className={classes.burgers}>How about some burgers?</span>
          </p>
          <button type="button">Yeah, sure</button>
        </div>
      )}
    </section>
  );
}
