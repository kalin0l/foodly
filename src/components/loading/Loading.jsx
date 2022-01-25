import React from "react";
import searchIcon from '../../assets/icon-search.svg'
import { MealContext } from "../../context/context";
import { useContext } from "react";
import classes from "../home/home.module.css";



export default function Loading(){
    const { search  } = useContext(MealContext);
    console.log(search)
    
        return (
          <section>
            <div className={classes.no_results}>
              <div className={classes.loader}>
                <span>
                  <img src={searchIcon} alt="src"/>
                </span>
              </div>
              <p>
                Searching for delicious food!{" "}
                <span className={classes.yum}>Yum 😋</span>
              </p>
            </div>
          </section>
        );
}