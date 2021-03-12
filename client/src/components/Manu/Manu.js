import React, { Fragment, useState } from 'react';
import Card from './Card/Card';
import classes from './Manu.module.css';

const Manu = () => {
    const [manuState] = useState([
        {
            name: 'Garlic Fingers',
            img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80',
            ingredients: ['Cheese', 'Garlic', 'Parsely', 'Tommato'],
            cost: 9.99
        },
        {
            name: 'Classic',
            img: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
            ingredients: ['Mozzarell', 'Onion', 'Spinach', 'Tommato'],
            cost: 4.99
        },
        {
            name: 'Detroit-Style Pizza',
            img: 'https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
            ingredients: ['Mozzarell', 'Pepperoni', 'Basil', 'Tommato'],
            cost: 12.99
        },
        {
            name: 'Pizza Vegetariana',
            img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
            ingredients: ['Cheese', 'Zucchini', 'Eggplant', 'Tommato'],
            cost: 6.99
        },
        {
            name: 'Tomato Pie',
            img: 'https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
            ingredients: ['Mozzarell', 'Tommato', 'Olive Oil', 'Salt'],
            cost: 8.99
        },
        {
            name: 'Piza Carbonara',
            img: 'https://images.unsplash.com/photo-1589840700256-f78d6ed1ae21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
            ingredients: ['Mozzarell', 'Pancetta', 'Grana Padano', 'Basil', 'Tommato'],
            cost: 15.99
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