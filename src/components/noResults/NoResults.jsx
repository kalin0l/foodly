import React from "react";
import classes from "../home/home.module.css";
import { MealContext } from "../../context/context";
import { useContext } from "react";


export default function NoResults(){
    const { search,setSearch } =
    useContext(MealContext);
    return (
        <div className={classes.no_results}>
          <p>
            No results found for {search}.
            <span className={classes.burgers}>How about some burgers?</span>
          </p>
          <button type="button" onClick={() => setSearch('burgers')}>Yeah, sure</button>
        </div>
      
    )
}