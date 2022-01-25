import React from "react";
import classes from "../home/home.module.css";
import { MealContext } from "../../context/context";
import { useContext } from "react";

export default function Input() {
  const { search, setSearch } = useContext(MealContext);
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={classes.input}
    />
  );
}
