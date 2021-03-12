import React from 'react';
import classes from './Recommend.module.css';

const Recommend = () => {
    return (
        <section className={classes.recommend}>
            <h1>Pizza Of The Day</h1>
            <p>Truffle alfredo sauce with 24 carat gold dust</p>
            <button>Order Now</button>
        </section>
    )
}

export default Recommend;