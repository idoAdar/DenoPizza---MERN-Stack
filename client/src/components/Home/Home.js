import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Manu from '../Manu/Manu';
import Recommend from '../Recommend/Recommend';
import DessertManu from '../Manu/DessertMenu';
import classes from './Home.module.css';

const Home = props => {
    return (
        <Fragment>
            <div className={classes.body}>
                <main className={classes.main_container}>
                    <Fragment>
                        {!props.isOrder ? null : (
                            <div className={classes.orderNote}>
                                <h3>Great Choice!</h3>
                                <p><i className="fas fa-thumbs-up fa-lg"></i> Get Ready For The Best Pizza You'll Ever Have</p>
                            </div>
                        )}
                        {!props.isSubmit ? null : (
                            <div className={classes.orderNote}>
                                <h3>Welcome Aboard!</h3>
                                <p><i className="fas fa-thumbs-up fa-lg"></i> One of our representative will contact you soon</p>
                            </div>
                        )}
                    </Fragment>
                    <div className={classes.wrapper}>
                        <i className="fas fa-utensils fa-3x"></i>
                        <h1>Deno //</h1>
                        <h1>Italian pizza</h1>
                        <p>Since 1963 -</p>
                        <p>
                            Homemade pizza is much more impressive than a takeaway, 
                            so try our ideas from classic pizza topped with sausage, 
                            aubergine or salami, and much more
                        </p>
                        <Link to="/join">Join</Link>  
                    </div>
                </main>
                <Manu />
                <Recommend />
                <DessertManu />
            </div>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        isOrder: state.isOrder,
        isSubmit: state.isSubmit
    }
}

export default connect(mapStateToProps)(Home);