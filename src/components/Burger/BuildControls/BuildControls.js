import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <div>Total Price: <strong>{props.totalPrice.toFixed(2)}</strong></div>
            {controls.map(value => (
                <BuildControl
                    key={value.label}
                    label={value.label}
                    type={value.type}
                    ingredientAdded={() => props.ingredientAdded(value.type)}
                    ingredientRemoved={() => props.ingredientRemoved(value.type)}
                    disabled={props.disabledInfo[value.type]}/>
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW
            </button>
        </div>
    )
};

export default buildControls;