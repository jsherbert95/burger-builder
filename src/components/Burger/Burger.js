import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //keys :        salad: 1,    bacon: 2,    cheese: 2,    meat: 2
    //First, i am creating an array of Keys (ingredients) -- then, mapping each one of those ingredients  -- this case keys above
    //MAP MY OBJECT, INTO AN ARRAY, OF INGREDIENTS IN THE END. console logs for confusion 
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key={igKey + + i} type={igKey} />
                });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

        return (
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top" />
                {transformedIngredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        );
};

export default burger;