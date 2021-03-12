import axios from 'axios';

export const postOrder = (data, history) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({...data});

    try {
        await axios.post('/api/deno', body, config); 
        dispatch({
            type: 'PURCHASING'
        })
        history.push('/');
    } catch (error) {
        console.dir(error);
    }
}

export const viewPizza = (sort, ingredients, price, img, history) => dispatch => {
    dispatch({
        type: 'SELECT_PIZZA',
        data: {
            sort,
            ingredients,
            price,
            img
        }
    })
    history.push(`/view/${sort}`);
}

export const applyForJob = (data, history) => async dispatch => {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const body = JSON.stringify({...data});

    try {
        await axios.post('/api/deno/candidate', body, config);
        dispatch({
            type: 'SUBMITTED'
        })
        history.push('/');
    } catch (error) {
        console.dir(error);
    }
}