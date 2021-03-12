import React, { Fragment, useState } from 'react';
import Card from './Card/Card';
import classes from './DessertManu.module.css';

const Manu = () => {
    const [manuState] = useState([
        {
            name: 'Hot chocolate',
            img: 'https://images.unsplash.com/photo-1590080876209-c70d0f0bf6a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: ['Chocolate', 'White Chocolate', 'Cocoa Powder', 'Cinnamon'],
            cost: 3.99
        },
        {
            name: 'Chocolate Cake',
            img: 'https://images.unsplash.com/photo-1565808229224-264b6fcc5052?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: ['Chocolate', 'Dark Chocolate', 'Cocoa'],
            cost: 3.50
        },
        {
            name: 'Cinnamon Roll Cake',
            img: 'https://images.unsplash.com/photo-1531240062960-4842b265a1ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=553&q=80',
            ingredients: ['Cinnamon', 'Milk', 'Cereal', 'Vanilla Cream'],
            cost: 5.90
        }
    ])

    return (
        <Fragment>
            <section className={classes.grid}>
                {manuState.map(pizza => {
                    return <Card key={pizza.name} 
                    sort={pizza.name}
                    img={pizza.img}
                    ingredients={pizza.ingredients.join(', ')} 
                    price={pizza.cost}/>
                })}
            </section>
        </Fragment>
    )
}

export default Manu;