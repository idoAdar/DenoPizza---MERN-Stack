import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/action';
import { withRouter } from 'react-router-dom';
import Spinner from '../UI/Spinner/Spinner';
import './Join.css';

const Join = props => {
    const [spinnerState, setSpinnerState] = useState(false);
    const [noteState, setNoteState] = useState(false);
    const [formState, setFormState] = useState({
        fullname: '',
        phone: '',
        address: '',
        experience: false
    });

    const updateState = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const send = e => {
        e.preventDefault();
        if (formState.fullname !== '' && 
            formState.phone !== '' && 
            formState.experience !== '') {
                setSpinnerState(true);
                props.apply(formState, props.history)
        } else {
            setNoteState(true);
        }
    }

    return (
        <section className="container">
            <div className="grid">
                <form onSubmit={(e) => send(e)} className="join_form_container">
                    <div className="main">
                        <h1>Join Our Team!</h1>
                        <p>We have plenty of unoccupied jobs for you!</p>
                        {noteState ? (<small>Please check your credentials</small>) : null}
                    </div>
                    <div className="input_field">
                        <small>Full Name:</small>
                        <input type="text" 
                        onChange={(e) => updateState(e)}
                        value={formState.fullname}
                        name="fullname"/>
                    </div>
                    <div className="input_field">
                        <small>Phone:</small>
                        <input type="text" 
                        onChange={(e) => updateState(e)}
                        value={formState.phone}
                        name="phone"/>
                    </div>
                    <div className="input_field">
                        <small>Address:</small>
                        <input type="text" 
                        onChange={(e) => updateState(e)}
                        value={formState.address}
                        name="address"/>
                    </div>
                    <div className="checkbox_field">
                        <input type="checkbox" 
                        onChange={() => setFormState({...formState, experience: !formState.experience})}
                        value={formState.experience}
                        name="experience"/>
                        <small> Experience:</small>
                    </div>
                    <div className="btn_field">
                        <button type="submit">Join</button>
                        {spinnerState ? <Spinner /> : null}
                    </div>
                </form>
                <div className="textFiller">
                    <h1>What is Lorem Ipsum?</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <p>
                        It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets 
                        containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor 
                        at Hampden-Sydney College in Virginia, looked up one of the 
                        more obscure Latin words, consectetur, from a Lorem Ipsum passage, 
                        and going through the cites of the word in classical literature, 
                        discovered the undoubtable source.
                    </p>
                    <p>
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
                        Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, 
                        written in 45 BC. This book is a treatise on the theory of ethics, 
                        very popular during the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>
            </div>
        </section>   
    )
}

const mapDispathToProps = dispatch => {
    return {
        apply: (data, history) => dispatch(action.applyForJob(data, history))
    }
}

export default connect(null, mapDispathToProps)(withRouter(Join));