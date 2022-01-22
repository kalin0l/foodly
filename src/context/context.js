import { useState, createContext, useEffect } from "react";

export const MealContext = createContext();

export const MealContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [seafood, setSeafood] = useState([]);
  const [italianFood, setitalianFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const [food, setFood] = useState([]);
  const [displayedMeal,setDisplayedMeal] = useState([]);
  const [isDisplayed, setIsDisplayed] = useState(false);


  useEffect(() => {
    const fetchSeaFood = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        const data = await res.json();
        setSeafood(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchSeaFood();
  }, []);
  useEffect(() => {
    const fetchItalian = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian"
        );
        const data = await res.json();
        console.log(data);
        setitalianFood(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchItalian();
  }, []);
  useEffect(() => {
    const fetchFood = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const data = await res.json();
        console.log(data);
        setFood(data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchFood();
  }, [search]);

  return (
    <MealContext.Provider
      value={{ search, setSearch, seafood, italianFood, food, loading,displayedMeal,setDisplayedMeal,isDisplayed,setIsDisplayed }}
    >
      {children}
    </MealContext.Provider>
  );
};
