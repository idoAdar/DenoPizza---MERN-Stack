import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import Check from '../Check/Check';
import classes from './View.module.css';

const View = props => {
    const [orderState, setOrderState] = useState({
        orders: 1,
        price: props.repository.price,
        check: false
    })

    const increment = () => { 
        setOrderState({
            ...orderState, 
            orders: orderState.orders + 1,
            price: props.repository.price * (orderState.orders + 1)
        })
    };

    const decrement = () => {
        if (orderState.price === props.repository.price) return
        setOrderState({ 
            ...orderState, 
            orders: orderState.orders - 1,
            price: props.repository.price * (orderState.orders - 1)
        })
    };

    const bill = () => setOrderState({ ...orderState, check: true });

    return (
        <Fragment>
            <Check isCheck={orderState.check}
                total={orderState.price.toFixed(2)}
                pizza={props.repository.sort}
                quantity={orderState.orders}/>
            <section className={classes.grid}>
                <div className={classes.img_view_container}>
                    <img src={props.repository.img} alt="img"/>
                </div>
                <div className={classes.text_container}>
                    <div>
                        <h1><i className="fas fa-pizza-slice"></i> {props.repository.sort}</h1>
                        <p>{props.repository.ingredients}</p>
                    </div>
                    <div className={classes.orders}>
                        <p>Orders: {orderState.orders}</p>
                        <button onClick={increment} className={classes.btn}>
                            <i className="fas fa-plus-square fa-2x"></i>
                        </button>
                        <button onClick={decrement} className={classes.btn}>
                            <i className="fas fa-minus-square fa-2x"></i>
                        </button>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book
                    </p>
                    <button onClick={bill} className={classes.btn_order}>Order Now {orderState.price.toFixed(2)} $</button>
                </div>
            </section>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        repository: state.repository
    }
}

export default connect(mapStateToProps)(View);