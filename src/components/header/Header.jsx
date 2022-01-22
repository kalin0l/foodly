import React from "react";
import classes from './header.module.css'
import foodly from '../../assets/logo.svg'



export default function Header(){
    return (
        <header className={classes.header}>
            <img src={foodly} alt="foodly" />
        </header>
    )
}