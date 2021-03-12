import React from 'react';
import { connect } from 'react-redux';
import * as action from '../../../store/action';
import { withRouter } from 'react-router-dom';
import classes from './Card.module.css';

const Main = props => {
    const viewProduct = (e) => {
        e.preventDefault();
        props.view(props.sort, props.ingredients, props.price, props.img, props.history);
    }

    return (
        <section className={classes.card_container}>
            <div className={classes.img_container}>
                <img src={props.img} alt={'img'}/>
            </div>
            <div className={classes.content_container}>
                <h4>{props.sort}</h4>
                <p>{props.ingredients}</p>
                <h4>{props.price} $</h4>
            </div>
            <div className={classes.btn_container}>
                <button onClick={(e) => viewProduct(e)}>View</button>
            </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        view: (sort, ingredients, price, img, history) => dispatch(action.viewPizza(sort, ingredients, price, img, history))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Main));