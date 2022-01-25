import React from "react";
import Header from "../header/Header";
import { MealContext } from "../../context/context";
import { useContext } from "react";
import Modal from "../modal/Modal";
import Loading from "../loading/Loading";
import Template from "../template/Template";
import SearchFood from "../searchFood/SearchFood";
import Input from "../input/Input";
import NoResults from "../noResults/NoResults";

export default function Home() {
  const { search, italianFood, seafood, loading, food, displayedMeal } =
    useContext(MealContext);
  const { meals } = food;
  console.log(meals, seafood, italianFood);

  if (loading) {
    return (
      <section>
        <Header />
        <Input />
        <Loading />;
      </section>
    );
  }
  return (
    <section>
      <Header />
      <Input />
      {search.length > 0 ? <SearchFood /> : <Template />}
      {displayedMeal !== [] && <Modal />}
      {meals === null && <NoResults />}
    </section>
  );
}
