import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients).map(ingredientType => {
        return <li key={ingredientType}>
                    <span style={{textTransform: 'capitalize'}}>{ingredientType}</span> : {props.ingredients[ingredientType]}
                </li>
    });
    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>A deliciious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">CANCEL</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">CONTINUE</Button>
        </Auxiliary>
    );
};

export default orderSummary;