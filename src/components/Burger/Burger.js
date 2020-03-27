import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(value => {
            return [...Array(props.ingredients[value])].map((_, i) => {
                return <BurgerIngredient key={value + i} type={value}></BurgerIngredient>;
            })
        })
        .reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue);
        }, []);

        if(transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>;
        }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;