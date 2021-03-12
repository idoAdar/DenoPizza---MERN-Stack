import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/action';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import './Check.css';

const Check = props => {
    const [spinnerState, setSpinnerState] = useState(false);
    const [noteState, setNoteState] = useState(false);
    const [formState, setFormState] = useState({
        customer: '',
        order: props.pizza,
        address: '',
        zipCode: '',
        creditCard: ''
    })

    const updateState = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const send = e => {
        e.preventDefault();
        if (formState.customer !== '' && 
            formState.address !== '' && 
            formState.zipCode !== '' && 
            formState.creditCard !== '') {
                setSpinnerState(true);
                const order = {
                    ...formState,
                    quantity: props.quantity,
                    price: props.total
                };
                props.sendOrder(order, props.history);
        } else {
            setNoteState(true);
        }
    }

    return (
        <section className={!props.isCheck ? null : 'bg-dark'}>
          <div className={!props.isCheck ? "check_container" : 'check_container modalOpen'}>
              <div className="wrapper">
                  <form onSubmit={(e) => send(e)} className="form_container">
                      <div className="header">
                          <p>Total Price: {props.total} $</p>
                          {spinnerState ? <Spinner /> : null}
                      </div>
                          {noteState ? (<small>Please check your credentials:</small>) : null}
                      <div className="input_field">
                          <input type="text"
                            onChange={(e) => updateState(e)}
                            value={formState.customer} 
                            placeholder="Full Name" 
                            name="customer"/>
                      </div>
                      <div className="input_field">
                          <input type="text" 
                            onChange={(e) => updateState(e)}
                            value={formState.zipCode} 
                            placeholder="Zip-Code" 
                            name="zipCode"/>
                      </div>
                      <div className="input_field">
                          <input type="text" 
                            onChange={(e) => updateState(e)}
                            value={formState.address} 
                            placeholder="Address" 
                            name="address"/>
                      </div>
                      <div className="input_field">
                          <input type="text" 
                            onChange={(e) => updateState(e)}
                            value={formState.creditCard} 
                            placeholder="xxxx-xxxx-xxxx-xxxx" 
                            name="creditCard"/>
                      </div>
                      <div className="controller">
                          <button type="submit" className="btn">PURCHASE</button>
                          <Link to='/'>
                            <i className="fas fa-times fa-lg"></i>
                          </Link>
                      </div>
                  </form>
              </div>
          </div>
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sendOrder: (data, history) => dispatch(action.postOrder(data, history))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Check));